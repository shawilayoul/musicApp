import { Track } from '../assests/data/track';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type PlayerProiderType = {
    track?: Track,
    setTrack: (track: Track) => void ,
}
const playerContext = createContext<PlayerProiderType>({
    setTrack: () => { },

});

export default function PlayerProvider({ children }: PropsWithChildren) {

    const [track, setTrack] = useState<Track>();
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <playerContext.Provider value={{ track, setTrack }}>
            {children}
        </playerContext.Provider>
    );

}


export const usePlayerContext = () => useContext(playerContext);
