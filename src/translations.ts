export type LanguageTranslation = {
    [key: string]: {
        [key: string]: string
    };
  };
  
export const messages: LanguageTranslation = {
    'en-GB': {
        topArtists: 'Top Artists',
        topTracks: 'Top Songs',
        loginWithSpotify: 'Log in with Spotify',
        removeAccess: 'I want to revoke access',
        removeAccessTitle: 'Revoke Access',
        removeAccessDescription: 'To revoke access, follow the Spotify link below. You will be presented with a list of apps. Click "Remove Access" for  "Listur"',
        removeAccessReturn: 'Got it, thanks!',
        removeAccessContinue: 'Spotify',
    },
    'pt-BR': {
        topArtists: 'Principais Artistas',
        topTracks: 'Principais Faixas',
        loginWithSpotify: 'Entrar com o Spotify'
    },
}