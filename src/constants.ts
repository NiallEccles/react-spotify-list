type SPOTIFY_CONSTANTS = {
    LOCAL_REDIRECT_URI: string;
    REDIRECT_URI: string;
    CLIENT_ID: string;
    API: {
        ROOT: string;
        ME: string;
        TOP_ARTISTS: string;
        TOP_TRACKS: string;
    }
}

export const SPOTIFY: SPOTIFY_CONSTANTS = {
    LOCAL_REDIRECT_URI: 'http://localhost:5173/auth/',
    REDIRECT_URI: 'https://react-spotify-list.vercel.app/auth/',
    CLIENT_ID: '591d4e02e88a4e20a1daf9d59f2a46db',
    API: {
        ROOT: 'https://api.spotify.com/v1/',
        ME: 'https://api.spotify.com/v1/me/',
        TOP_ARTISTS: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term',
        TOP_TRACKS: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term'
    },
}