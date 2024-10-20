import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import FavoritesTrackList from '../components/FavoritesTrackList';
import axios from 'axios';
import { Track, usePlayerContext } from '../store/trackPlayerContext';
import UsePlayll from '../hooks/UsePlayll';
import UseSearchHook from '../hooks/UseSearchHook';
import LoadingSpinner from '../components/LoadingSpinner';

const FavoritesScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
    const { playing } = useIsPlaying();
    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);
    const [loading, setLoading] = useState(true);
    const { favorites, setFavorites } = usePlayerContext();

    useEffect(() => {
        const trackLikedByUser = async () => {

            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/likedTrack');
                setFavorites(response.data);
            } catch (error) {
                console.log('error getting tracks', error);
            } finally {
                setLoading(false);
            }
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

    // play all
    const playAll = async () => {

        await TrackPlayer.reset();

        await TrackPlayer.add(favorites);
        if (playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };
    if (loading) {
        return <View style={{ flex: 1 }}>
            <LoadingSpinner />
        </View>;
    }
    return (
        <SafeAreaView>
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <UsePlayll playAll={playAll} playing={playing} songs={filteredTracks} />
            <View><View><FavoritesTrackList tracks={filteredTracks} /></View></View>
        </SafeAreaView>
    );
};

export default FavoritesScreen;
