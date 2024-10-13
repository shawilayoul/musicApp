import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Searchbar } from 'react-native-paper';
import { Track } from 'react-native-track-player';
import FavoritesTrackList from '../components/FavoritesTrackList';
import axios from 'axios';
import { usePlayerContext } from '../store/trackPlayerContext';
const FavoritesScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    const { favorites, setFavorites } = usePlayerContext();

    useEffect(() => {
        const trackLikedByUser = async () => {
            const response = await axios.get('https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/likedTrack');
            setFavorites(response.data);
        };
        trackLikedByUser();
    }, [setFavorites]);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(favorites); }
        else {
            const filtered = favorites.filter((track) => track.title?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [favorites, searchText]);


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
            <View><View><FavoritesTrackList tracks={filteredTracks} /></View></View>
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
