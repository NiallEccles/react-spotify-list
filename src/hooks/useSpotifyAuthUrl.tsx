import { useEffect, useState } from 'react';
import { SPOTIFY } from '../constants';

function generateRandomString(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function base64encode(arrayBuffer: ArrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    const byteArray = Array.from(uint8Array);
    return btoa(String.fromCharCode.apply(null, byteArray))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export function useSpotifyAuthUrl() {
    const [authUrl, setAuthUrl] = useState<string | null>(null);

    useEffect(() => {
        const clientId = SPOTIFY.CLIENT_ID;
        const redirectUri = SPOTIFY.REDIRECT_URI;

        const codeVerifier = generateRandomString(128);

        generateCodeChallenge(codeVerifier).then(codeChallenge => {
            const state = generateRandomString(16);
            const scope = 'user-top-read';

            localStorage.setItem('code_verifier', codeVerifier);

            const args = new URLSearchParams({
                response_type: 'code',
                client_id: clientId,
                scope: scope,
                redirect_uri: redirectUri,
                state: state,
                code_challenge_method: 'S256',
                code_challenge: codeChallenge,
            });

            const url = 'https://accounts.spotify.com/authorize?' + args.toString();
            setAuthUrl(url);
        });
    }, []);

    return { url: authUrl };
}

async function generateCodeChallenge(codeVerifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
}

