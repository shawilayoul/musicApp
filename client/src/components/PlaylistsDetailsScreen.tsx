import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/StackNavigation';
import { playlistsongs } from '../assests/data/track';
import TrackPlayer, { Event, Track, useActiveTrack, useIsPlaying, useTrackPlayerEvents } from 'react-native-track-player';
import { Colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePlayerContext } from '../store/trackPlayerContext';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlaylistsDetailsScreen'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlaylistsDetailsScreen'>;

type DetailsScreenProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

const PlaylistsDetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
    const [currentTrackId, setCurrentTrackId] = useState(null);
    const [itemId, setItemID] = useState(null);
    const { playing } = useIsPlaying();
    const { addFavorite, removeFavorites, isFavrite } = usePlayerContext();
    const queueOffset = useRef(0);
    const { activeQueueId, setActiveQueuedId } = usePlayerContext();

    const activeTrack = useActiveTrack();
    const { playlistId, playlistName } = route.params;

    const songs = playlistsongs[playlistId];

    // handeling favorites fuctionalities
    const toggleFavorites = (track) => {
        if (!isFavrite(track?.id)) {
            addFavorite(track?.id);
        } else {
            if (isFavrite(track?.id)) {
                removeFavorites(track?.id);
            }
        }
    };

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.index != null) {
            const trackId = await TrackPlayer.getTrack(event.index);
            setCurrentTrackId(trackId?.id);
        }
    });


    const handleTrack = async (selectedTrack: Track) => {
        const id = 'shawil';

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

    const isPlaying = (activeTrack?.id === itemId);
    console.log(isPlaying,itemId,currentTrackId,activeTrack)
    return (
        <View style={styles.container}>
            <Text style={styles.playlistName}>{playlistName}</Text>
            <FlatList data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                (<TouchableOpacity onPress={() => { handleTrack(item); setItemID(item?.id) }} >
                    <View style={styles.playlistItemsContainer}><View style={styles.playlistItems}>
                        <Image source={{ uri: item?.artwork }} width={40} height={40} />
                        <View>
                            <Text style={{ color: Colors.title }}>{item.title}</Text>
                            <Text>{item.artist}</Text>
                        </View>
                    </View>
                        <View style={styles.playIcon}>
                            <Icon name="heart"
                                size={25}
                                color={isFavrite(item?.id) ? Colors.activeTitle : Colors.gray} onPress={() => toggleFavorites(item)} />
                            <Icon
                                name={(isPlaying && playing) ? 'pause' : 'play'} // Change icon based on play/pause state
                                size={25}
                                color={(isPlaying && playing) ? Colors.activeTitle : Colors.icon} // Color based on state
                            />
                        </View>
                    </View>
                </TouchableOpacity>)} />
        </View>
    );
};

export default PlaylistsDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        margin: 'auto',
        paddingVertical: 10,
    },
    playlistItemsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginVertical: 5,
    },
    playlistName: {
        color: Colors.title,
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
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
