// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const query = async (endpoint: string, headers: object): Promise<any> => {
    const response = await fetch(endpoint, headers);

    if(response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(`${response.status}`)
    }
};

// export const getMe = async () => query(SPOTIFY.API.ME);
// export const getTopArtists = async () => query(SPOTIFY.API.TOP_ARTISTS);
// export const getTopTracks = async () => query(SPOTIFY.API.TOP_TRACKS);