import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/StackNavigation';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { Colors } from '../constants/colors';
import { Track, usePlayerContext } from '../store/trackPlayerContext';
import PlaylistTracklistItem from '../components/PlaylistTracklistItem';
import axios from 'axios';
import UsePlayll from '../hooks/UsePlayll';
import UseSearchHook from '../hooks/UseSearchHook';
import LoadingSpinner from '../components/LoadingSpinner';


type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlaylistsDetailsScreen'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlaylistsDetailsScreen'>;

type DetailsScreenProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

const ArtistTracksList: React.FC<DetailsScreenProps> = ({ route }) => {
    const { playing } = useIsPlaying();
    const queueOffset = useRef(0);
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
    const { activeQueueId, setActiveQueuedId } = usePlayerContext();
    const [tracks, setAllSongs] = useState<Track[]>([]);
    const { playlistId, playlistName } = route.params;

    const [loading, setLoading] = useState(true);
    //search functionality
    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    useEffect(() => {
        const getUserPlaylist = async () => {
            try {
                const response = await axios.get(`https://musicserver-h836.onrender.com/playlist/playlistTracks/${playlistId}`);
                setAllSongs(response.data.tracks.map((item: { track: any; }) => item.track));
            } catch (error) {
                console.log('error getting user platlist', error);
            } finally {
                setLoading(false);
            }
        };
        getUserPlaylist();

    }, [playlistId]);

    //filtering tracks by title

    useEffect(() => {
        if (!searchText) { setFilteredTracks(tracks); }
        else {
            const filtered = tracks.filter((track) => track?.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText, tracks]);
    //play lll
    const playAll = async () => {

        await TrackPlayer.reset();

        await TrackPlayer.add(tracks);
        if (playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };


    type TrackHandler = (id: string, track: Track) => Promise<void>;

    const handleTrack: TrackHandler = async (id, selectedTrack) => {
        const trackIndex = tracks.findIndex((track: { url: string; }) => track.url === selectedTrack.url);
        if (trackIndex === -1) { return; }

        const isChangingQueue = id !== activeQueueId;
        if (isChangingQueue) {
            const beforeTrack = tracks.slice(0, trackIndex);
            const afterTrack = tracks.slice(trackIndex + 1);
            await TrackPlayer.reset();

            await TrackPlayer.add(selectedTrack);
            await TrackPlayer.add(afterTrack);
            await TrackPlayer.add(beforeTrack);

            if (playing) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }

            queueOffset.current = trackIndex;
            setActiveQueuedId(id);

        } else {

            const nextTrackIndex = trackIndex - queueOffset.current < 0 ? tracks.length + trackIndex - queueOffset.current
                : trackIndex - queueOffset.current;
            await TrackPlayer.skip(nextTrackIndex);
            if (playing) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }
        }
    };
    if (loading) {
        return <View style={styles.loading}>
            <LoadingSpinner />
        </View>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.playlistNameContainer}>
                <Text style={styles.playlistName}>{playlistName}</Text>
            </View>
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <UsePlayll playAll={playAll} playing={playing} songs={filteredTracks} />

            <FlatList
                ListEmptyComponent={
                    <View style={styles.notFount}>
                        <Text>No songs Found</Text>
                    </View>
                }
                data={filteredTracks}
                keyExtractor={(item) => item.id}
                renderItem={({ item: track }) => (<PlaylistTracklistItem track={track} selectedTrack={handleTrack} />)} />
        </View>
    );
};

export default ArtistTracksList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    playlistNameContainer: {
        backgroundColor: Colors.white,
        width: '100%',
    },
    playlistName: {
        color: Colors.title,
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        padding: 10,
        textTransform: 'uppercase',
    },
    playlistItemsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginVertical: 5,
    },
    playlistItems: {
        padding: 10,
        color: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        borderRadius: 10,
        gap: 10,
    },
    playIcon: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10,
    },
    notFount: {
        alignItems: 'center',
    },
    loading: {
        flex: 1,
    },
});
