/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/*


export default App;*/

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, { Capability, State, useProgress } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';

const tracks = [
  {
    id: '1',
    url: require('./src/assests/song1.mp3'),
    title: 'Track 1',
    artist: 'Artist 1',
    artwork: 'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '2',
    url: require('./src/assests/song2.mp3'),
    title: 'Track 2',
    artist: 'Artist 2',
    artwork: 'https://media.istockphoto.com/id/1155368162/fr/photo/belle-jeune-femme-de-hipster-avec-les-cheveux-boucl%C3%A9s-avec-la-guitare-rouge-dans-les-lumi%C3%A8res.webp?a=1&b=1&s=612x612&w=0&k=20&c=xiL1Fkaj1FI2JKq8nVCJuOioG2WTLz_i9LxIUlXIdTQ=',
  },
  {
    id: '3',
    url: require('./src/assests/song3.mp3'),
    title: 'Track 3',
    artist: 'Artist 3',
    artwork: 'https://media.istockphoto.com/id/1535648487/fr/photo/des-plans-rapproch%C3%A9s-dun-chanteur-attrayant-chantant-de-la-musique-et-jouant-de-la-guitare.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ZS7sAGG6RXgJ4AQLu921mUILdKSjaoUgplFwSLTqvg=',
  },
  {
    id: '4',
    url: require('./src/assests/song4.mp3'),
    title: 'Track 4',
    artist: 'Artist 4',
    artwork: 'https://media.istockphoto.com/id/607260652/fr/photo/trio-musical-cubain.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dzpDI4Aw2pW91eBHFkpQugdC0A1jqNEsOo9glHvjbM=',
  },
  {
    id: '5',
    url: require('./src/assests/song5.mp3'),
    title: 'Track 5',
    artist: 'Artist 5',
    artwork: 'https://media.istockphoto.com/id/1977233037/fr/photo/handsome-male-singer-on-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dhdk1gTGwfCUraxynuaZKs6fk2MQ3NJ3jTD9huQJUPQ=',
  },
  {
    id: '6',
    url: require('./src/assests/song6.mp3'),
    title: 'Track 6',
    artist: 'Artist 6',
    artwork: 'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const App = () => {
  const progress = useProgress();
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ title: '', artist: '', artwork: '' });  // State to track if the player is ready

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        // Setup the player
        await TrackPlayer.setupPlayer();

        // Update options for the player (e.g., notifications, capabilities)
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
        });

        // Add a track to the player queue
        await TrackPlayer.add(tracks);

        // Play the first track automatically
       // await TrackPlayer.play();

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
    return () => {
      TrackPlayer.reset();
    };
  }, []);



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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  artwork: {
    width: 300,
    height: 300,
    marginBottom: 20,
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
    marginTop: 25,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 30,
  },
});

export default App;


