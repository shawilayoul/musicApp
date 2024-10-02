import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Track } from 'react-native-track-player';

type PlayerProiderType = {
    track?: Track,
    setTrack: (track: Track) => void,
    activeQueueId?: string | null
    setActiveQueuedId: (id: string) => void,
    favorites?: Track[],
    addFavorite: (songId: Track) => void
    removeFavorites: (songId: Track) => void
    isFavrite: (songId: string) => string
};
const playerContext = createContext<PlayerProiderType>({
    setTrack: () => { },
    setActiveQueuedId: () => { },
    addFavorite: () => { },
    removeFavorites: () => { },
    isFavrite: (): string => {},
});

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [activeQueueId, setActiveQueuedId] = useState('');
    const [track, setTrack] = useState<Track>();
    const [favorites, setFavorites] = useState<Track[]>([]);

    const addFavorite = (songId: Track) => {
        setFavorites([...favorites, songId]);
    };

    const removeFavorites = (songId: Track) => {
        setFavorites(favorites.filter(id => id !== songId));
    };

    const isFavrite = (songId: string) => {
        return favorites.includes(songId);
    };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <playerContext.Provider value={{ track, setTrack, activeQueueId, setActiveQueuedId, favorites, addFavorite, removeFavorites, isFavrite }}>
            {children}
        </playerContext.Provider>
    );

}


export const usePlayerContext = () => useContext(playerContext);
