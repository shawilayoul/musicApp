import React from 'react';
import { View } from 'react-native';
import tracks from '../assests/data/track';
import TrackList from '../components/TrackList';

const SongsScreen = () => {
 const Search = 'songs';

    const trackListId = (trackListName: string, search?: string) => {
        return `${trackListName} ${`- ${search} || '' `}`;
    };
    return (
        <View><TrackList id={trackListId('songs', Search)} tracks={tracks} /></View>
    );
};

export default SongsScreen;
