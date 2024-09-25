import React, { useRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import TrackListItems from './TrackListItems';
import TrackPlayer from 'react-native-track-player';
import { usePlayerContext } from '../store/trackPlayerContext';
import { Track } from '../assests/data/track';

export type TrackListType = Partial<FlatListProps<Track>> & {
    id: string,
    tracks: Track[],
}

const TrackList = ({ id, tracks }: TrackListType) => {

    const queueOffset = useRef(0);
    const { activeQueueId, setActiveQueuedId } = usePlayerContext();

    const handleTrack = async (selectedTrack: Track) => {

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

            await TrackPlayer.play();

            queueOffset.current = trackIndex;
            setActiveQueuedId(id);

        } else {

            const nextTrackIndex = trackIndex - queueOffset.current < 0 ? tracks.length + trackIndex - queueOffset.current
                : trackIndex - queueOffset.current;
            await TrackPlayer.skip(nextTrackIndex);
            await TrackPlayer.play();

        }
    };

    return (
        <FlatList data={tracks} renderItem={({ item: track }) => (<TrackListItems track={track} selectedTrack={handleTrack} />)} />
    );
};

export default TrackList;
