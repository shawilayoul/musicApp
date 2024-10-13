import { createContext, useContext, useState } from 'react';

export interface Track {
    some(arg0: (fav: any) => boolean): unknown;
    id: string;
    title: string;
    artist: string;
    artwork: string;
    url: string;
    createdAt: string; // Ensure this matches the type that TypeScript expects
    duration: number;
}
type PlayerProiderType = {
    activeQueueId?: string | null
    setActiveQueuedId: (id: string) => void,
    favorites: Track[]; // Add favorites property of type array of Track
    setFavorites: (tracks: Track[]) => void;
};
const playerContext = createContext<PlayerProiderType>({
    setActiveQueuedId: () => { },
    setFavorites: () => { },
    favorites: [],
});

export default function PlayerProvider({ children }: { children: React.ReactNode }) {
    const [activeQueueId, setActiveQueuedId] = useState('');
    const [favorites, setFavorites] = useState<Track[]>([]);


    const value = {
        activeQueueId,
        setActiveQueuedId,
        favorites,
        setFavorites,   // Ensure setFavorite is passed
    };
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <playerContext.Provider value={value}>
            {children}
        </playerContext.Provider>
    );

}


export const usePlayerContext = () => useContext(playerContext);
