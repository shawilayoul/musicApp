import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import tracks, { Track } from '../assests/data/track';
import TrackList from '../components/TrackList';
import { Colors } from '../constants/colors';
import { Searchbar } from 'react-native-paper';
const FavoritesScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

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
                <View style={styles.container}>
                    <Searchbar
                        placeholder="search by song title ...."
                        value={searchText}
                        style={styles.searchBar}
                        onChangeText={onChangeSearch}
                    />
                </View>
            </View>
            <View><View><TrackList tracks={filteredTracks} /></View></View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: Colors.lightblue,
    },
});
export default FavoritesScreen;
