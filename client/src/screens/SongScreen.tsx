import React from 'react';
import { FlatList, View } from 'react-native';
import TrackPlayerList from '../components/TrackPlayerList';
import tracks from '../assests/data/track';

const SongsScreen = () => {
    return (
        <View><FlatList data={tracks} renderItem={({ item }) => < TrackPlayerList item={item} />} /></View>
    );
};

export default SongsScreen;
