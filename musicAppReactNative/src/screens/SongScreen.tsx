import React, { useEffect, useState } from 'react';
import TrackList from '../components/TrackList';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import { Track } from '../store/trackPlayerContext';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import UsePlayll from '../hooks/UsePlayll';
import UseSearchHook from '../hooks/UseSearchHook';
import LoadingSpinner from '../components/LoadingSpinner';

const SongsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);

    const { playing } = useIsPlaying();
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        const getUserPlaylist = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/track');
                setTracks(response.data);
            } catch (error) {
                console.log('error getting tracks', error);
            } finally {
                setLoading(false);
            }
        };
        getUserPlaylist();
    }, []);

    // play all
    const playAll = async () => {

        await TrackPlayer.reset();

        await TrackPlayer.add(tracks);
        if (playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(tracks); }
        else {
            const filtered = tracks.filter((track) => track?.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText, tracks]);

    if (loading) {
        return <View style={styles.loading}>
            <LoadingSpinner />
        </View>;
    }

    return (
        <SafeAreaView>
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <UsePlayll playAll={playAll} playing={playing} songs={filteredTracks} />
            <View>
                <TrackList tracks={filteredTracks} />
            </View>
        </SafeAreaView>
    );
};

export default SongsScreen;
const styles = StyleSheet.create({
    loading: {
        flex: 1,
    },
});
