import {useEffect, useRef, useState} from 'react';
import TrackPlayer, {
  Capability,
  RatingType,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

const tracks = [
  {
    id: '1',
    url: require('../../assests/song4.mp3'),
    title: 'Track 1',
    artist: 'Artist 1',
    artwork: 'https://example.com/track1.jpg',
  },
  {
    id: '2',
    url: require('../../assests/song4.mp3'),
    title: 'Track 2',
    artist: 'Artist 2',
    artwork: 'https://example.com/track2.jpg',
  },
];

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  });
  await TrackPlayer.updateOptions({
    ratingType: RatingType.Heart,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
  });
  await TrackPlayer.setVolume(0.3);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);

  await TrackPlayer.add(tracks);
};


export const useSetupTrackPlayer = () => {
  const isInitialized = useRef(false);
  const [trackTitle, setTrackTitle] = useState('');
const [trackArtist, setTrackArtist] = useState('');
const [trackArtwork, setTrackArtwork] = useState('');

const loadTracks = async () => {
  await TrackPlayer.add(tracks);
  updateTrackInfo();
};
const updateTrackInfo = async () => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex();
  const trackObject = await TrackPlayer.getTrack(Number(currentTrack));
  if (trackObject) {
    setTrackTitle(trackObject.title);
    setTrackArtist(trackObject.artist);
    setTrackArtwork(trackObject.artwork);
  }
};

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }
    // Add your track or playlist

    setupPlayer();
    loadTracks();
  }, []);
};
