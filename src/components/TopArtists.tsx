import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface Artist {
    name: string;
}

export const TopArtists = () => {
    const [artistData, setArtistData] = useState<Artist[] | null>(null);
    const accessToken = localStorage.getItem('access_token');
    const { data, isLoading, status, error } = useQuery("Spotify Top Artists", async () => {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        const returnData = await response.json();

        return returnData;
    });

    console.log(data);

    useEffect(() => {
        if (!isLoading) {
            if (status === "success") {
                const { items } = data;
                setArtistData(items);
            } else {
                console.log('ERROR');
                console.log(error);
            }
        }
    }, [data, status]);

    return (
        <section>
            <h3>Top Artists</h3>
            <ol>
                {
                    artistData && artistData.map((artist: Artist, index: number) => {
                        return index < 10 ? <li key={artist.name}>{artist.name}</li> : null
                    })
                }
            </ol>
        </section>
    )
}