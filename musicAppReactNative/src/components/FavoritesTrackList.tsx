import React, { useRef } from 'react';
import { FlatList, FlatListProps, Text, StyleSheet } from 'react-native';
import TrackPlayer, { useIsPlaying, Track } from 'react-native-track-player';
import { usePlayerContext } from '../store/trackPlayerContext';
import { View } from 'react-native';
import FavoritesTrackListItems from './FavoritesTrackListItems';

export type TrackListType = Partial<FlatListProps<Track>> & {
    tracks: Track[],
}

const FavoritesTrackList = ({ tracks }: TrackListType) => {
    const queueOffset = useRef(0);
    const { activeQueueId, setActiveQueuedId } = usePlayerContext();
    const { playing } = useIsPlaying();

    const handleTrack = async (selectedTrack: Track) => {
        const id = 'favorites';

        const trackIndex = tracks.findIndex((track) => track.url === selectedTrack.url);
        if (trackIndex === -1) { return; }

        const isChangingQueue = id !== activeQueueId;

        if (isChangingQueue) {
            const beforeTrack = tracks.slice(0, trackIndex);
            const afterTrack = tracks.slice(trackIndex + 1);
            await TrackPlayer.reset();

            await TrackPlayer.add(selectedTrack);
            await TrackPlayer.add(afterTrack);
            await TrackPlayer.add(beforeTrack);

            if (playing) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }

            queueOffset.current = trackIndex;
            setActiveQueuedId(id);

        } else {

            const nextTrackIndex = trackIndex - queueOffset.current < 0 ? tracks.length + trackIndex - queueOffset.current
                : trackIndex - queueOffset.current;
            await TrackPlayer.skip(nextTrackIndex);
            if (playing) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }
        }
    };

    return (
        <FlatList ListEmptyComponent={
            <View style={styles.notFount}>
                <Text>No Songs Found</Text>
            </View>
        }
            showsVerticalScrollIndicator={false}
            data={tracks}
            keyExtractor={(item) => item.id}
            renderItem={({ item: track }) => (<FavoritesTrackListItems track={track} selectedTrack={handleTrack} />)} />
    );
};

const styles = StyleSheet.create({
    notFount: {
        alignItems: 'center',
    },
});

export default FavoritesTrackList;

