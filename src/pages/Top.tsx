import { useQueries } from "react-query"
import { Header } from "../components/Header"
import { TopArtists } from "../components/TopArtists"
import { TopSongs } from "../components/TopSongs"
import { query } from "../queries"
import { useStore } from "../state"
import { SPOTIFY } from "../constants";

export const Top = () => {
    const { access_token } = useStore();

    const getHeaders = (accessToken: string) => {
        return {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            }
        }
    }

    const getMe = async () => query(SPOTIFY.API.ME, getHeaders(access_token ? access_token : ''));
    const getTopArtists = async () => query(SPOTIFY.API.TOP_ARTISTS, getHeaders(access_token ? access_token : ''));
    const getTopTracks = async () => query(SPOTIFY.API.TOP_TRACKS, getHeaders(access_token ? access_token : ''));

    const [me, topArtists, topTracks] = useQueries([
        { queryKey: ['me', 1], queryFn: getMe, staleTime: Infinity},
        { queryKey: ['top artists', 2], queryFn: getTopArtists, staleTime: Infinity},
        { queryKey: ['top tracks', 3], queryFn: getTopTracks, staleTime: Infinity}
    ]);

    console.log(me, topArtists, topTracks);
    return (
        <>
            <Header data={me.data}/>
            <TopArtists items={topArtists.data.items}/>
            <TopSongs items={topTracks.data.items}/>
        </>
    )
}