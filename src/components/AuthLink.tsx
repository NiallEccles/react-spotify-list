import { useEffect, useState } from "react";
import { useSpotifyAuthUrl } from "../hooks/useSpotifyAuthUrl";

export const AuthLink = () => {
    const [authUrl, setAuthUrl] = useState<string|null>(null);
    const { url } = useSpotifyAuthUrl();

    useEffect(() => {
      setAuthUrl(url);
    }, [url]);

    return (
        authUrl && <a href={authUrl}>Log in with Spotify</a>
    )
}