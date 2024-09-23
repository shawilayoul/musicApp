import React from 'react';
import { FlatList, View } from 'react-native';
//import { Text } from 'react-native';
import tracks2 from '../assests/data/track';
import TrackPlayerList from '../components/TrackPlayerList';
const FavoritesScreen = () => {
    return (
        <View><View><FlatList data={tracks2} renderItem={({ item }) => < TrackPlayerList item={item} />} /></View></View>
    );
};

export default FavoritesScreen;
