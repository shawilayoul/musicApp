import React from 'react';
import { View } from 'react-native';
import tracks2 from '../assests/data/track';
import TrackList from '../components/TrackList';
const FavoritesScreen = () => {
    const Search = 'songs';

    const trackListId = (trackListName: string, search?: string) => {
        return `${trackListName} ${`- ${search} || '' `}`;
    };

    return (
        <View><View><TrackList id={trackListId('songs', Search)} tracks={tracks2} /></View></View>
    );
};

export default FavoritesScreen;
