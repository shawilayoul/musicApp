import React, { useEffect, useState } from 'react';
import TrackList from '../components/TrackList';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Colors } from '../constants/colors';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';
import { Track } from '../store/trackPlayerContext';

const SongsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        const getUserPlaylist = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/track');
                setTracks(response.data);
            } catch (error) {
                console.log('error getting tracks', error);
            }
        };
        getUserPlaylist();
    }, []);
    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);
    useEffect(() => {
        if (!searchText) { setFilteredTracks(tracks); }
        else {
            const filtered = tracks.filter((track) => track?.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText, tracks]);

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
            <View>
                <TrackList tracks={filteredTracks} />
            </View>
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
export default SongsScreen;
