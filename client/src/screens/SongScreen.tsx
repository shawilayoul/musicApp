import React from 'react';
import tracks from '../assests/data/track';
import TrackList from '../components/TrackList';

const SongsScreen = () => {
    const Search = 'songs';

    const trackListId = (trackListName: string, search?: string) => {
        return `${trackListName} ${`- ${search} || '' `}`;
    };
    return (<TrackList id={trackListId('songs', Search)} tracks={tracks} />
    );
};

export default SongsScreen;
