import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import TrackPlayer, { useActiveTrack, useIsPlaying } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';
import { imageUrl } from '../assests/data/track';
import { Colors } from '../constants/colors';

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
      <View style={styles.imageContainer}>
        <Image source={{ uri: activeTrack.artwork ?? imageUrl }} style={styles.image} />
      </View>
      <View>
        <Text style={playing ? { color: Colors.activeTitle } : { color: Colors.title }}>{activeTrack?.title ?? ''}</Text>
        <Text>{activeTrack?.artist ?? ''}</Text>
      </View>
      <View style={styles.playIconContainer}>
        <TouchableOpacity onPress={() => playing ? TrackPlayer.pause() : TrackPlayer.play()}>
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
    margin: 'auto',
    borderRadius: 10,
    cursor: 'pointer',
    zIndex: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:10,
  },
  imageContainer: {
    marginLeft: 20,
  },
  image: {
    width: 55,
    aspectRatio: 1,
    borderRadius: 50,
  },
  title: {
    color: Colors.title,
    fontSize: 24,
    fontWeight: 'bold',
  },
  playIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
