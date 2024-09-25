import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { Track } from '../assests/data/track';
import TrackPlayer, { Event, useTrackPlayerEvents } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';

type TrackPlayerListType = {
    track: Track,
    selectedTrack: (track: Track) => void;
};
const TrackListItems = ({ track, selectedTrack }: TrackPlayerListType) => {
    const [currentTrackId, setCurrentTrackId] = useState(null);
    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.index != null) {
            const trackId = await TrackPlayer.getTrack(event.index);
            setCurrentTrackId(trackId?.id);
        }
    });

    const isPlaying = currentTrackId === track.id;
    return (
        <Pressable style={styles.container} onPress={() => selectedTrack(track)}>
            <View>
                <Image source={{ uri: track?.artwork ?? 'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} style={styles.image} />
                <View style={styles.loaderKitContainer}>
                    {isPlaying ? <Icon
                        style={styles.loaderKit}
                        name="pause"
                        color={'red'}
                    /> : <Icon name="play" size={24} style={styles.playIcon} />}
                </View>

            </View>
            <View>
                <Text style={(currentTrackId === track.id) ? { color: 'red' } : { color: '#000' }}>{track?.title ?? ''}</Text>
                <Text>{track?.artist ?? ''}</Text>
            </View>
        </Pressable>
    );
};

export default TrackListItems;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        padding: 5,
        backgroundColor: '#ffff',
        margin: 5,
        borderEndEndRadius: 5,
        cursor: 'pointer',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    title: {
        color: '#000',
        fontWeight: '600',
    },
    loaderKit: {
        width: 30,
        height: 30,
    },
    playIcon:{
        position:'absolute',
        left:8,
        color:'#1282a2',
    },
    loaderKitContainer: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
});
