import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const accessToken = localStorage.getItem('access_token');

    const navigate = useNavigate();

    const { isLoading, error, data, isFetching } = useQuery("Spotify Me", async () => {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const returnData = await response.json();

        return returnData;
    });

    if(error){
        navigate('/', { replace: true })
    }

    return (
        !isLoading && !isFetching && <h2>{data.display_name}</h2>
    )
}