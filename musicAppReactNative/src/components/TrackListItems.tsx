import React, { useEffect, useState } from 'react';
import TrackPlayer, { Event, useIsPlaying, useTrackPlayerEvents } from 'react-native-track-player';
import axios from 'axios';
import { usePlayerContext } from '../store/trackPlayerContext';
import { Track } from '../store/trackPlayerContext';
import UsePlayItems from '../hooks/UsePlayItems';

type TrackPlayerListType = {
    track: Track,
    selectedTrack: (id:string,track: Track) => void;
};
const TrackListItems = ({ track, selectedTrack }: TrackPlayerListType) => {
    const [currentTrackId, setCurrentTrackId] = useState(null);
    const { playing } = useIsPlaying();

    const [isLiked, setIsLiked] = useState(false);
    const { setFavorites } = usePlayerContext();

    useEffect(() => {
        const trackLikedByUser = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/likedTrack');
                // Assuming response.data is an array of liked track objects
                const likedTrackIds = response.data.map((track: { id: string; }) => track.id); // Extract the IDs

                if (likedTrackIds.includes(track?.id)) {
                    setIsLiked(true);
                }
            }
            catch (error) {
                console.log('Error fetching liked status', error);
            }
        };
        trackLikedByUser();
    }, [track?.id]);


    // handeling favorites fuctionalities
    const toggleFavorites = async () => {
        try {
            const newLikedStatus = !isLiked;
            setIsLiked(newLikedStatus);
            if (newLikedStatus) {
                await axios.post(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/like/${track?.id}`);
                // Add the track to the state immediately
                setFavorites((prevLikedTracks) => [...prevLikedTracks, track]);
            } else {
                await axios.delete(`https://musicserver-h836.onrender.com/user/66fc66651c032413823ea923/unlike/${track?.id}`);
                setFavorites((prevLikedTracks) => prevLikedTracks.filter((t) => t.id !== track.id));

            }
        } catch (error) {
            console.error('Error toggling like status', error);
            setIsLiked(!isLiked);
        }
    };
    //console.log(isliked)
    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if (event.index != null) {
            const trackId = await TrackPlayer.getTrack(event.index);
            setCurrentTrackId(trackId?.id);
        }
    });

    return (
        <UsePlayItems selectedTrack={selectedTrack} track={track} playing={playing} toggleFavorites={toggleFavorites} isLiked={isLiked} currentTrackId={currentTrackId}/>
    );
};

export default TrackListItems;

