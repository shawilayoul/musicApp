import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
//import { usePlayerContext } from '../store/trackPlayerContext';
import TrackPlayer, {useActiveTrack, useIsPlaying } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';

const FloadPlayer = () => {
  const activeTrack = useActiveTrack();
  const { playing } = useIsPlaying();
  //const { track } = usePlayerContext();


  /*useEffect(() => {
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
  }, [track?.artist, track?.artwork, track?.id, track?.title, track?.url]);*/


  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
      //updateCurrentTrackInfo(); // Update track info after skipping to the next track
    } catch (error) {
      console.log('No next track available', error);
    }
  };

  if (!activeTrack) { return null; }

  return (
    <Pressable style={styles.container} >
      <View>
        <Image source={{ uri: activeTrack.artwork ?? 'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>{activeTrack?.title ?? ''}</Text>
        <Text>{activeTrack?.artist ?? ''}</Text>
      </View>
      <View style={styles.playIcon}>
        <TouchableOpacity onPress={()=>playing ? TrackPlayer.pause() : TrackPlayer.play()}>
          <Icon
            name={playing ? 'pause-circle' : 'play-circle'}
            size={60}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipToNext}>
          <Icon name="play-skip-forward" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </Pressable>
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
  playIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
