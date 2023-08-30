import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useQuery } from "react-query";

interface Track {
    name: string;
}

export const TopSongs = () => {
    const [trackData, setTrackData] = useState<Track[] | null>(null);
    const accessToken = localStorage.getItem('access_token');
    const { data, isLoading, status, error } = useQuery("Spotify Top Songs", async () => {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        const returnData = await response.json();

        return returnData;
    }, {
        staleTime: Infinity
    });

    console.log(data);

    useEffect(() => {
        if (!isLoading) {
            if (status === "success") {
                const { items } = data;
                setTrackData(items);
            } else {
                console.log('ERROR');
                console.log(error);
            }
        }
    }, [data, status]);

    return (
        <section>
            <h3><FormattedMessage id="topTracks" /></h3>
            <ol>
                {
                    trackData && trackData.map((track: Track, index: number) => {
                        return index < 10 ? <li key={track.name}>{track.name}</li> : null
                    })
                }
            </ol>
        </section>
    )
}