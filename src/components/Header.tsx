import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface Me {
    display_name: string;
}

export const Header = () => {
    const [myData, setMyData] = useState<Me | null>(null);
    const accessToken = localStorage.getItem('access_token');
    const { data, isLoading, status, error } = useQuery("Spotify Me", async () => {
        const response = await fetch('https://api.spotify.com/v1/me/', {
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
                setMyData(data);
            } else {
                console.log('ERROR');
                console.log(error);
            }
        }
    }, [data, status]);

    return (
        <h3>{myData?.display_name}</h3>
    )
}