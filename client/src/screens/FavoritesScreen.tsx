import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import tracks from '../assests/data/track';
import { Colors } from '../constants/colors';
import { Searchbar } from 'react-native-paper';
import { usePlayerContext } from '../store/trackPlayerContext';
import { Track } from 'react-native-track-player';
import FavoritesTrackList from '../components/FavoritesTrackList';
const FavoritesScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const { favorites } = usePlayerContext();
    const favoritesTrack = filteredTracks.filter(track => favorites?.includes(track?.id));
    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(tracks); }
        else {
            const filtered = tracks.filter((track) => track.title?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText]);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Searchbar
                    placeholder="search by song title ...."
                    value={searchText}
                    style={styles.searchBar}
                    onChangeText={onChangeSearch}
                />
            </View>
            <View><View><FavoritesTrackList tracks={favoritesTrack} /></View></View>
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
