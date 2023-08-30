import { useQueries } from "react-query"
// import { TopArtists } from "../components/TopArtists"
// import { TopSongs } from "../components/TopSongs"
import { getMe, getTopArtists, getTopTracks } from "../queries"

export const Top = () => {
    const results = useQueries([
        { queryKey: ['me', 1], queryFn: getMe, staleTime: Infinity},
        { queryKey: ['top artists', 2], queryFn: getTopArtists, staleTime: Infinity},
        { queryKey: ['top tracks', 3], queryFn: getTopTracks, staleTime: Infinity}
    ]);
    console.log(results);
    return (
        <>
            {/* <Header/> */}
            {/* <TopArtists/> */}
            {/* <TopSongs/> */}
        </>
    )
}