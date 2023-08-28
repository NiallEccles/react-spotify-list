export type LanguageTranslation = {
    [key: string]: {
        [key: string]: string
    };
  };
  
export const messages: LanguageTranslation = {
    'en-GB': {
        topArtists: 'Top Artists',
        topTracks: 'Top Songs',
        loginWithSpotify: 'Log in with Spotify'
    },
    'pt-BR': {
        topArtists: 'Principais Artistas',
        topTracks: 'Principais Faixas',
        loginWithSpotify: 'Entrar com o Spotify'
    },
}