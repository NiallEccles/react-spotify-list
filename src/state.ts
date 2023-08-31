import { create } from "zustand";
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
// import { v4 as uuidv4 } from 'uuid';

type AppState = {
    access_token: string|null;
    setAccessToken: (token: string) => void;
    code_verififer: string|null;
    setCodeVerifier: (verifier: string) => void;
}

export const useStore = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                // initial state
                access_token: null,
                code_verififer: null,
                // methods for manipulating state
                setAccessToken: (token: string) => {
                    set(() => ({
                        access_token: token
                    }));
                },
                setCodeVerifier: (verifier: string) => {
                    set(() => ({
                        code_verififer: verifier
                    }));
                },
                stateVersion: 1,
            }), {
            name: 'appState', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
        )
    )
);