export const query = async (endpoint: string, headers: object) => {
    const response = await fetch(endpoint, headers);
    const returnData = await response.json();

    return returnData;
};

// export const getMe = async () => query(SPOTIFY.API.ME);
// export const getTopArtists = async () => query(SPOTIFY.API.TOP_ARTISTS);
// export const getTopTracks = async () => query(SPOTIFY.API.TOP_TRACKS);