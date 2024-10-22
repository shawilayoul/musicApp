import React from 'react';
import { Text, View } from 'react-native';

const PodcastsLists = ({ route }) => {

    const { podcastId,
        podcastName } = route.params;
    return (
        <View>
            <Text>{podcastName}</Text>
            <Text> Hello from podcast list</Text></View>
    );
};

export default PodcastsLists;
