/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/**/

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, { State, useProgress, Event } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { tracks2 } from '../assests/data/track';

const MusicPlayer = () => {
    const progress = useProgress();
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [currentTrack, setCurrentTrack] = useState({ title: '', artist: '', artwork: 'https://media.istockphoto.com/id/607260652/fr/photo/trio-musical-cubain.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dzpDI4Aw2pW91eBHFkpQugdC0A1jqNEsOo9glHvjbM=' });  // State to track if the player is ready

    useEffect(() => {
        const setupPlayer = async () => {
            try {
                await TrackPlayer.setupPlayer();
                // clean up the previous track
                await TrackPlayer.reset();
                // Add a track to the player queue
                await TrackPlayer.add(tracks2);
                // Play the first track automatically
                //await TrackPlayer.play();
                // Event listener for when the playback queue ends
                TrackPlayer.addEventListener(Event.PlaybackQueueEnded, async () => {
                    console.log('Queue ended, skipping back to the first track...');
                    await TrackPlayer.seekTo(0); // Seek to the start of the first track
                    await TrackPlayer.play(); // Play the first track
                });
                // Update current track info when the player starts
                updateCurrentTrackInfo();
                // Mark the player as ready
                setIsPlayerReady(true);
            } catch (error) {
                console.error('Error setting up TrackPlayer:', error);
            }
        };
        setupPlayer();
        // Cleanup on component unmount
        // Listen for when the track changes
        const trackChangeListener = TrackPlayer.addEventListener(
            Event.PlaybackActiveTrackChanged,
            async data => {
                if (data.track !== null) {
                    // Check if the current track exists
                    // Update the track info when the track changes
                    updateCurrentTrackInfo();
                }
            },
        );
        return () => {
            trackChangeListener.remove();
        };

    }, []);
    //formatime to display the progress par
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}: ${secs < 10 ? '0' : ''} ${secs}`;
    };

    // Function to update the current track information
    const updateCurrentTrackInfo = async () => {
        const currentTrackId = await TrackPlayer.getCurrentTrack(); // Get the current track ID
        if (currentTrackId !== null) {
            const track = await TrackPlayer.getTrack(currentTrackId); // Fetch track details
            if (track) {
                setCurrentTrack({
                    title: track.title || 'Unknown Title', // Handle undefined title
                    artist: track.artist || 'Unknown Artist', // Handle undefined artist
                    artwork: track.artwork || 'unknown Artwork',
                });
            } else {
                // Handle the case where the track is not found (just in case)
                setCurrentTrack({
                    title: 'No Track Found',
                    artist: 'Unknown Artist',
                    artwork: 'Unknown Artwork',
                });
            }
        }
    };
    // Function to toggle play/pause
    const togglePlayback = async () => {
        const currentState = (await TrackPlayer.getPlaybackState()).state;
        if (currentState === State.Playing) {
            await TrackPlayer.pause();
            setIsPlayerReady(false);
        } else {
            await TrackPlayer.play();
            setIsPlayerReady(true);
        }
    };

    const skipToNext = async () => {
        try {
            await TrackPlayer.skipToNext();
            updateCurrentTrackInfo(); // Update track info after skipping to the next track
        } catch (error) {
            console.log('No next track available', error);
        }
    };
    const skipToPrevious = async () => {
        try {
            await TrackPlayer.skipToPrevious();
            updateCurrentTrackInfo(); // Update track info after skipping to the previous track
        } catch (error) {
            console.log('No previous track available', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: currentTrack.artwork }} style={styles.artwork} />
            <Text style={styles.title}>{currentTrack.title} </Text>
            <Text style={styles.artist}>{currentTrack.artist} </Text>
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
                <Text>{formatTime(progress.position)}</Text>
                <Text>{formatTime(progress.duration - progress.position)}</Text>
            </View>

            <View style={styles.controls}>
                <TouchableOpacity onPress={skipToPrevious}>
                    <Icon name="play-skip-back" size={40} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback}>
                    <Icon
                        name={isPlayerReady ? 'pause-circle' : 'play-circle'}
                        size={60}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={skipToNext}>
                    <Icon name="play-skip-forward" size={40} color="#000" />
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
        backgroundColor: '#f5f5f5',
    },
    artwork: {
        width: 300,
        height: 250,
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 18,
        color: '#888',
    },
    progress: {
        width: 300,
        height: 40,
        marginTop: 10,
    },
    progressTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 10,
    },
});



