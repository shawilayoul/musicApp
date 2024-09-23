import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { usePlayerContext } from '../store/trackPlayerContext';
import TrackPlayer, { State } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';


const FloadPlayer = () => {


  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const { track } = usePlayerContext();

  useEffect(() => {
    const setUpTrack = async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: track?.id,
        url: track?.url,
        title: track?.title,
        artist: track?.artist,
        artwork: track?.artwork,
      });
      await TrackPlayer.play();
    };
    setUpTrack();

    return () => {
      TrackPlayer.stop();
    };
  }, [track?.artist, track?.artwork, track?.id, track?.title, track?.url]);

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

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: track?.artwork || 'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>{track?.title}</Text>
        <Text>{track?.artist}</Text>
      </View>
      <TouchableOpacity onPress={togglePlayback}>
        <Icon
          name={isPlayerReady ? 'pause-circle' : 'play-circle'}
          size={60}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloadPlayer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    padding: 5,
    backgroundColor: 'lightgray',
    margin: 5,
    borderEndEndRadius: 5,
    cursor: 'pointer',
    zIndex: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
