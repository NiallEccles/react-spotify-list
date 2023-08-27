import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

interface Artist {
    name: string;
    // Add more properties if needed
}

export const TopArtists = () => {
    const accessToken = localStorage.getItem('access_token');

    const navigate = useNavigate();

    const { isLoading, error, data, isFetching } = useQuery("Spotify Top Artists", async () => {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        const returnData = await response.json();

        return returnData;
    });

    console.log(data);

    if(error || !data){
        navigate('/', { replace: true })
    }

    return (
        (!isLoading && !isFetching && data) &&
        <section>
            <h3>Top Artists</h3>
            <ol>
            {
                data.items.map((artist: Artist, index: number)=>{
                    return index < 10 ? <li key={artist.name}>{artist.name}</li> : null
                })
            }
            </ol>
        </section>
    )
}