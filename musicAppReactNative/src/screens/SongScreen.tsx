import React, { useEffect, useState } from 'react';
import TrackList from '../components/TrackList';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import { Track } from '../store/trackPlayerContext';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import UsePlayll from '../hooks/UsePlayll';
import UseSearchHook from '../hooks/UseSearchHook';

const SongsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const { playing } = useIsPlaying();
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

    return (
        <SafeAreaView>
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <UsePlayll playAll={playAll} playing={playing} />
            <View>
                <TrackList tracks={filteredTracks} />
            </View>
        </SafeAreaView>
    );
};

export default SongsScreen;
