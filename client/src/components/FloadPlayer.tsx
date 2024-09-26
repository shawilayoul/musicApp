import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import TrackPlayer, { useActiveTrack, useIsPlaying } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { imageUrl } from '../assests/data/track';

const FloadPlayer = () => {
  const activeTrack = useActiveTrack();
  const { playing } = useIsPlaying();
  const navigation = useNavigation();
  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.log('No next track available', error);
    }
  };

  if (!activeTrack) { return null; }

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('StackNavigation', { screen: 'MusicPlayer' })}>
      <View>
        <Image source={{ uri: activeTrack.artwork ?? imageUrl }} style={styles.image} />
      </View>
      <View>
        <Text style={playing ? { color: 'red' } : { color: '#0a2472' }}>{activeTrack?.title ?? ''}</Text>
        <Text>{activeTrack?.artist ?? ''}</Text>
      </View>
      <View style={styles.playIcon}>
        <TouchableOpacity onPress={() => playing ? TrackPlayer.pause() : TrackPlayer.play()}>
          <Icon
            name={playing ? 'pause-circle' : 'play-circle'}
            size={60}
            color="#0a2472"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipToNext}>
          <Icon name="play-skip-forward" size={40} color="#0a2472" />
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
    backgroundColor: 'lightblue',
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
