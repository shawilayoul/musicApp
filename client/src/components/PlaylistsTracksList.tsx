import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/StackNavigation';
import { playlistsongs } from '../assests/data/track';
import TrackPlayer, { Track, useIsPlaying } from 'react-native-track-player';
import { Colors } from '../constants/colors';
import { usePlayerContext } from '../store/trackPlayerContext';
import PlaylistTracklistItem from './PlaylistTracklistItem';
import { Searchbar } from 'react-native-paper';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlaylistsDetailsScreen'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlaylistsDetailsScreen'>;

type DetailsScreenProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

const PlaylistsDetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
    const { playing } = useIsPlaying();
    const queueOffset = useRef(0);
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
    const { activeQueueId, setActiveQueuedId } = usePlayerContext();

    const { playlistId, playlistName } = route.params;

    const songs = playlistsongs[playlistId];


    //search functionality
    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(songs); }
        else {
            const filtered = songs.filter((track) => track?.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText, songs]);


    const handleTrack = async (id:string, selectedTrack: Track) => {
        const trackIndex = songs.findIndex((track: { url: string; }) => track.url === selectedTrack.url);
        if (trackIndex === -1) { return; }

        const isChangingQueue = id !== activeQueueId;

        if (isChangingQueue) {
            const beforeTrack = songs.slice(0, trackIndex);
            const afterTrack = songs.slice(trackIndex + 1);
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

            const nextTrackIndex = trackIndex - queueOffset.current < 0 ? songs.length + trackIndex - queueOffset.current
                : trackIndex - queueOffset.current;
            await TrackPlayer.skip(nextTrackIndex);
            if (playing) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.playlistNameContainer}>
                <Text style={styles.playlistName}>{playlistName} Playlist</Text>
            </View>
            <View style={styles.searchbarContainer}>
                <Searchbar
                    placeholder="search by song title ...."
                    value={searchText}
                    style={styles.searchBar}
                    onChangeText={onChangeSearch}
                />
            </View>
            <FlatList data={filteredTracks}
                keyExtractor={(item) => item.id}
                renderItem={({ item: track }) => (<PlaylistTracklistItem track={track} selectedTrack={handleTrack} />)} />
        </View>
    );
};

export default PlaylistsDetailsScreen;

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
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
        padding: 10,
    },
    searchbarContainer: {
        padding: 10,
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: Colors.lightblue,
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
});
