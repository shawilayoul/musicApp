import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { imageUrl } from '../assests/data/track';
import TrackPlayer, { Event, useIsPlaying, useTrackPlayerEvents, Track } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/colors';
import { usePlayerContext } from '../store/trackPlayerContext';

type TrackPlayerListType = {
    track: Track,
    selectedTrack: (track: Track) => void;
};
const TrackListItems = ({ track, selectedTrack }: TrackPlayerListType) => {
    const [currentTrackId, setCurrentTrackId] = useState(null);
    const { playing } = useIsPlaying();
    const { addFavorite, removeFavorites, isFavrite } = usePlayerContext();

    // handeling favorites fuctionalities
    const toggleFavorites = () => {
        if (!isFavrite(track?.id)) {
            addFavorite(track?.id);
        } else {
            if (isFavrite(track?.id)){
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

    const isPlaying = currentTrackId === track.id;
    return (
        <Pressable style={styles.container} onPress={() => selectedTrack(track)}>
            <View style={styles.left}>
                <Text>{track.id}</Text>
                <Image source={{ uri: track?.artwork ?? imageUrl }} style={styles.image} />

                <View>
                    <Text style={(isPlaying && playing) ? { color: Colors.activeTitle } : { color: Colors.title }}>{track?.title ?? ''}</Text>
                    <Text>{track?.artist ?? ''}</Text>
                </View>
            </View>
            <View style={styles.playIcon}>
                <Icon name="heart"
                    size={25}
                    color={isFavrite(track?.id) ? Colors.activeTitle : Colors.gray } onPress={() => toggleFavorites()} />
                <Icon
                    name={(isPlaying && playing) ? 'pause' : 'play'} // Change icon based on play/pause state
                    size={25}
                    color={(isPlaying && playing) ? Colors.activeTitle : Colors.icon} // Color based on state
                />
            </View>
        </Pressable>
    );
};

export default TrackListItems;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginVertical: 5,
        padding: 5,
        backgroundColor: '#ffff',
        borderRadius: 10,
        margin: 'auto',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    title: {
        color: Colors.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    playIcon: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10,
    },
});
