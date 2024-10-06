import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { imageUrl } from '../assests/data/track';
import TrackPlayer, { Event, useIsPlaying, useTrackPlayerEvents } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/colors';
import axios from 'axios';

interface Track {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    url: string;
    createdAt: string; // Ensure this matches the type that TypeScript expects
    duration: number;
}
type TrackPlayerListType = {
    track: Track,
    selectedTrack: (id: string, track: Track) => void;
};
const PlaylistTracklistItem = ({ track, selectedTrack }: TrackPlayerListType) => {
    const [currentTrackId, setCurrentTrackId] = useState(null);
    const { playing } = useIsPlaying();

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const trackLikedByUser = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/likedTrack');
                // Assuming response.data is an array of liked track objects
                const likedTrackIds = response.data.map((track: { id: string; }) => track.id); // Extract the IDs

                if (likedTrackIds.includes(track?.id)) {
                    setIsLiked(true);
                }
            }
            catch (error) {
                console.log('Error fetching liked status', error);
            }
        };
        trackLikedByUser();
    }, [track?.id]);



    // handeling favorites fuctionalities
    const toggleFavorites = async () => {

        try {
            const newLikedStatus = !isLiked;
            setIsLiked(newLikedStatus);
            if (newLikedStatus) {
                await axios.post(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/like/${track?.id}`);
            } else {
                await axios.delete(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/unlike/${track?.id}`);
            }
        } catch (error) {
            console.error('Error toggling like status', error);
            setIsLiked(!isLiked);
        }
    };

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.index != null) {
            const trackId = await TrackPlayer.getTrack(event.index);
            setCurrentTrackId(trackId?.id);
        }
    });

    TrackPlayer.addEventListener(Event.PlaybackError, (error) => {
        console.error('An error occurred while trying to play the track', error);
    });

    const isPlaying = currentTrackId === track?.id;
    return (
        <Pressable style={styles.container} onPress={() => selectedTrack(track?.id, track)}>
            <View style={styles.left}>
                <Image source={{ uri: track?.artwork ?? imageUrl }} style={styles.image} />

                <View>
                    <Text style={(isPlaying && playing) ? { color: Colors.activeTitle } : { color: Colors.title }}>{track?.title ?? ''}</Text>
                    <Text>{track?.artist ?? ''}</Text>
                </View>
            </View>
            <View style={styles.playIcon}>
                <Icon name="heart"
                    size={25}
                    color={isLiked ? Colors.activeTitle : Colors.gray} onPress={() => toggleFavorites()} />
                <Icon
                    name={(isPlaying && playing) ? 'pause' : 'play'} // Change icon based on play/pause state
                    size={25}
                    color={(isPlaying && playing) ? Colors.activeTitle : Colors.icon} // Color based on state
                />
            </View>
        </Pressable>
    );
};

export default PlaylistTracklistItem;

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
