import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { imageUrl } from '../assests/data/track';
import TrackPlayer, { Event, useIsPlaying, useTrackPlayerEvents, Track } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/colors';
import { usePlayerContext } from '../store/trackPlayerContext';
import axios from 'axios';


type TrackPlayerListType = {
    track: Track,
    selectedTrack: (track: Track) => void;
};
const FavoritesTrackListItems = ({ track, selectedTrack }: TrackPlayerListType) => {

    const [currentTrackId, setCurrentTrackId] = useState(null);
    const { playing } = useIsPlaying();

    const [isLiked, setIsLiked] = useState(false);
    const { setFavorites } = usePlayerContext();

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.index != null) {
            const trackId = await TrackPlayer.getTrack(event.index);
            setCurrentTrackId(trackId?.id);
        }
    });

    // handeling favorites fuctionalities
    const toggleFavorites = async () => {

        try {
            const newLikedStatus = !isLiked;
            setIsLiked(newLikedStatus);
            if (newLikedStatus) {
                await axios.delete(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/unlike/${track?.id}`);
                setFavorites((prevLikedTracks) => prevLikedTracks.filter((t) => t.id !== track.id));
            }
        } catch (error) {
            console.error('Error toggling like status', error);
            setIsLiked(!isLiked);
        }
    };

    const isPlaying = currentTrackId === track.id;
    return (
        <Pressable style={styles.container} onPress={() => selectedTrack(track)}>
            <View style={styles.left}>
                <Image source={{ uri: track?.artwork ?? imageUrl }} style={styles.image} />

                <View>
                    <Text style={(isPlaying && playing) ? { color: Colors.activeTitle } : { color: Colors.title }}>{track?.title ?? ''}</Text>
                    <Text>{track?.artist ?? ''}</Text>
                </View>
            </View>
            <View style={styles.playIcon}>
                <TouchableOpacity onPress={toggleFavorites}>
                    <Icon name="heart"
                        size={20}
                        color={Colors.activeTitle} />
                </TouchableOpacity>
                <Icon
                    name={(isPlaying && playing) ? 'pause' : 'play'} // Change icon based on play/pause state
                    size={20}
                    color={(isPlaying && playing) ? Colors.activeTitle : Colors.icon} // Color based on state
                />
            </View>
        </Pressable>
    );
};

export default FavoritesTrackListItems;

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
