import React from 'react';
import tracks from '../assests/data/track';
import TrackList from '../components/TrackList';
import { TextInput, View } from 'react-native';


const SongsScreen = () => {

    return (
        <View>
            <View>
                <TextInput placeholder="search for a song by title" />
            </View>
            <View>
                <TrackList tracks={tracks} />
            </View>
        </View>
    );
};

export default SongsScreen;
