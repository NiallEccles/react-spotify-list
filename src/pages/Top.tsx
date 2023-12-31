import { useQueries } from "react-query"
import { Header } from "../components/Header"
import { TopArtists } from "../components/TopArtists"
import { TopSongs } from "../components/TopSongs"
import { query } from "../queries"
import { useStore } from "../state"
import { SPOTIFY } from "../constants";
import { useNavigate } from "react-router-dom"
import { Error } from "../components/Error"
import { Loading } from "../components/Loading"
import { RemoveAccess } from "../components/RemoveAccess"

export const Top = () => {
    const { access_token } = useStore();

    const navigate = useNavigate();

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
        { queryKey: ['me', 1], queryFn: getMe, staleTime: Infinity },
        { queryKey: ['top artists', 2], queryFn: getTopArtists, staleTime: Infinity },
        { queryKey: ['top tracks', 3], queryFn: getTopTracks, staleTime: Infinity }
    ]);

    // console.log(me, topArtists, topTracks);

    // if(me.isLoading === false && me.data?.error) navigate('/', { replace: true });

    if (!me.isLoading && me.isError) navigate('/', { replace: true });
    return (
        <>
            <h1 className='text-4xl mb-5 text-white font-bold'>Listur</h1>
            {me?.data ? <Header data={me.data} /> : ''}

            {!topArtists.isLoading && topArtists.data ? <TopArtists items={topArtists.data.items} /> : ''}
            {topArtists.isLoading && <Loading />}
            {!topArtists.isLoading && topArtists.error ? <Error error={String(topArtists.error)} /> : ''}

            {!topTracks.isLoading && topTracks.data ? <TopSongs items={topTracks.data.items} /> : ''}
            {topTracks.isLoading && <Loading />}
            {!topTracks.isLoading && topTracks.error ? <Error error={String(topTracks.error)} /> : ''}

            <img className="w-40 mx-auto pb-10" src="/Spotify_Logo_RGB_White.png" alt="" />
            <RemoveAccess/>
        </>
    )
}