import {SetStateAction, useEffect} from 'react';
import TrackPlayer, {Event} from 'react-native-track-player';
import {tracks2} from '../assests/data/track';

export const useSetUpTrackPlayer = (
  updateCurrentTrackInfo: {(): Promise<void>; (): void},
  setIsPlayerReady: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  },
) => {
  useEffect(() => {
    const setupPlayer = async () => {
      try {
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
      TrackPlayer.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
