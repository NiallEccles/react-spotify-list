import { useQuery } from "react-query";
import { SPOTIFY } from "./constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Auth = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const codeVerifier = localStorage.getItem('code_verifier');

    const navigate = useNavigate();

    const { data, isLoading, status, error } = useQuery("Spotify API Token", async () => {
        if (code && codeVerifier) {
            const body = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: SPOTIFY.REDIRECT_URI,
                client_id: SPOTIFY.CLIENT_ID,
                code_verifier: codeVerifier
            });

            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            });
            const returnData = await response.json();

            return returnData;
        }
    });

    useEffect(() => {
        if (!isLoading) {
            if (status === "success") {
                console.log('GOT DATA');
                const { access_token } = data;
                console.log(access_token);
                localStorage.setItem('access_token', access_token);
                navigate('/top', { replace: true })
            } else {
                console.log('ERROR');
                console.log(error);
                navigate('/', { replace: true })
            }
        }
    }, [data, status]);

    return (<></>);
}