export const isLocal = (): boolean => {
    return window.location.origin.includes('localhost') ? true: false;
}