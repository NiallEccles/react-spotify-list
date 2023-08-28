import { useEffect, useState } from "react";
import { useSpotifyAuthUrl } from "../hooks/useSpotifyAuthUrl";
import { FormattedMessage } from "react-intl";

export const AuthLink = () => {
    const [authUrl, setAuthUrl] = useState<string|null>(null);
    const { url } = useSpotifyAuthUrl();

    useEffect(() => {
      setAuthUrl(url);
    }, [url]);
    return (
        authUrl && <a href={authUrl}><h3><FormattedMessage id="loginWithSpotify" /></h3></a>
    )
}