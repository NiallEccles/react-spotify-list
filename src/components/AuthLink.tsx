import { useEffect, useState } from "react";
import { useSpotifyAuthUrl } from "../hooks/useSpotifyAuthUrl";
import { FormattedMessage } from "react-intl";

export const AuthLink = () => {
  const [authUrl, setAuthUrl] = useState<string | null>(null);
  const { url } = useSpotifyAuthUrl();

  useEffect(() => {
    setAuthUrl(url);
  }, [url]);
  return (
    authUrl && <div className="h-full flex flex-row items-center">
      <a className="block text-black text-xl p-2 h-12 text-center w-full bg-rose-200 border-black border-2 hover:bg-rose-300 transition-colors ease-in-out" href={authUrl}>
        <h3>
          <FormattedMessage id="loginWithSpotify" />
        </h3>
      </a></div>
  )
}