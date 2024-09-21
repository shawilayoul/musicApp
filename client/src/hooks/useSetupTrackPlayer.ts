import {SetStateAction, useEffect} from 'react';
import TrackPlayer, {Capability, Event} from 'react-native-track-player';
import tracks from '../assests/data/track';

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
          notificationCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [
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
