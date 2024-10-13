import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { imageUrl } from '../assests/data/track';
import TrackPlayer, { Event, useIsPlaying, useTrackPlayerEvents } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../constants/colors';
import axios from 'axios';
import { usePlayerContext } from '../store/trackPlayerContext';
import { Track } from '../store/trackPlayerContext';

type TrackPlayerListType = {
    track: Track,
    selectedTrack: (track: Track) => void;
    addFavorite: (track: Track) => void;
};
const TrackListItems = ({ track, selectedTrack }: TrackPlayerListType) => {
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

    const { setFavorites} = usePlayerContext();


    // handeling favorites fuctionalities
    const toggleFavorites = async () => {

        try {
            const newLikedStatus = !isLiked;
            setIsLiked(newLikedStatus);
            if (newLikedStatus) {
                await axios.post(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/like/${track?.id}`);
                // Add the track to the state immediately
                setFavorites((prevLikedTracks) => [...prevLikedTracks, track]);
            } else {
                await axios.delete(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/unlike/${track?.id}`);
                setFavorites((prevLikedTracks) => prevLikedTracks.filter((t) => t.id !== track.id));

            }
        } catch (error) {
            console.error('Error toggling like status', error);
            setIsLiked(!isLiked);
        }
    };

    //console.log(isliked)
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
                <Image source={{ uri: track?.artwork || imageUrl }} style={styles.image} />
                <View>
                    <Text style={(isPlaying && playing) ? { color: Colors.activeTitle } : { color: Colors.title }}>{track?.title ?? ''}</Text>
                    <Text>{track?.artist ?? ''}</Text>
                </View>
            </View>
            <View style={styles.playIcon}>
                <TouchableOpacity onPress={toggleFavorites}>
                    <Icon name={isLiked ? 'heart' : 'heart'}
                        size={25}
                        color={isLiked ? Colors.activeTitle : Colors.gray} />
                </TouchableOpacity>
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
