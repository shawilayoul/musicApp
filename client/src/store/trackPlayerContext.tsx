import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Track } from 'react-native-track-player';

type PlayerProiderType = {
    track?: Track,
    setTrack: (track: Track) => void,
    activeQueueId?: string | null
    setActiveQueuedId: (id: string) => void,
};
const playerContext = createContext<PlayerProiderType>({
    setTrack: () => { },
    setActiveQueuedId: () => { },
});

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [activeQueueId, setActiveQueuedId] = useState('');
    const [track, setTrack] = useState<Track>();
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <playerContext.Provider value={{ track, setTrack, activeQueueId, setActiveQueuedId }}>
            {children}
        </playerContext.Provider>
    );

}


export const usePlayerContext = () => useContext(playerContext);
