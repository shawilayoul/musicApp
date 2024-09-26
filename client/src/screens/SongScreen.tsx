import React, { useEffect, useState } from 'react';
import tracks, { Track } from '../assests/data/track';
import TrackList from '../components/TrackList';
import { TextInput, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Colors } from '../constants/colors';


const SongsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(tracks); }
        else {
            const filtered = tracks.filter((track) => track.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText]);

    return (
        <SafeAreaView>
            <View>
                <View>
                    <TextInput placeholder="search by song title...." style={styles.search} onChangeText={(text) => setSearchText(text)} />
                </View>
                <View>
                    <TrackList tracks={filteredTracks} scrollEnabled={false} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    search: {
        padding: 5,
        margin: 10,
        borderColor: Colors.icon,
        borderWidth: 2,
        borderRadius: 5,
    },
});
export default SongsScreen;
