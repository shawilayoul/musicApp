/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/**/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, { State, useProgress, useActiveTrack, useIsPlaying } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { imageUrl } from '../assests/data/track';
import { Colors } from '../constants/colors';
const MusicPlayer = () => {
    const progress = useProgress();
    const activeTrack = useActiveTrack();
    const { playing } = useIsPlaying();

    //formatime to display the progress par
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}: ${secs < 10 ? '0' : ''} ${secs}`;
    };

    const togglePlayback = async () => {
        const currentState = (await TrackPlayer.getPlaybackState()).state;
        if (currentState === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const skipToNext = async () => {
        try {
            await TrackPlayer.skipToNext();
        } catch (error) {
            console.log('No next track available', error);
        }
    };
    const skipToPrevious = async () => {
        try {
            await TrackPlayer.skipToPrevious();
        } catch (error) {
            console.log('No previous track available', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: activeTrack?.artwork ?? imageUrl }} style={styles.artwork} />
            <Text style={{ ...styles.title, color: playing ? Colors.activeTitle : Colors.title }}>{activeTrack?.title ?? ''} </Text>
            <Text style={styles.artist}>{activeTrack?.artist ?? 'unknow artist'} </Text>
            <Slider
                style={styles.progress}
                value={progress.position}
                minimumValue={0}
                maximumValue={progress.duration}
                onSlidingComplete={async value => {
                    await TrackPlayer.seekTo(value);
                }}
            />
            <View style={styles.progressTime}>
                <Text style={{ color: Colors.title }}>{formatTime(progress.position)}</Text>
                <Text style={{ color: Colors.title }}>{formatTime(progress.duration - progress.position)}</Text>
            </View>

            <View style={styles.controls}>
                <TouchableOpacity onPress={skipToPrevious}>
                    <Icon name="play-skip-back" size={40} color={Colors.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback}>
                    <Icon
                        name={playing ? 'pause-circle' : 'play-circle'}
                        size={60}
                        color={Colors.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={skipToNext}>
                    <Icon name="play-skip-forward" size={40} color={Colors.icon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MusicPlayer;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    artwork: {
        width: 250,
        height: 250,
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.title,
    },
    artist: {
        fontSize: 18,
        color: Colors.subTitle,
    },
    progress: {
        width: '100%',
        height: 40,
        marginTop: 10,
    },
    progressTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 10,
    },
});




