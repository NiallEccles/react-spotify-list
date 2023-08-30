import { SPOTIFY } from "../constants";

const accessToken = localStorage.getItem('access_token');

const HEADERS = {
    headers: {
        Authorization: 'Bearer ' + accessToken,
    }
}

export const query = async (endpoint: string) => {
    const response = await fetch(endpoint, HEADERS);
    const returnData = await response.json();

    return returnData;
};

export const getMe = async () => query(SPOTIFY.API.ME);
export const getTopArtists = async () => query(SPOTIFY.API.TOP_ARTISTS);
export const getTopTracks = async () => query(SPOTIFY.API.TOP_TRACKS);