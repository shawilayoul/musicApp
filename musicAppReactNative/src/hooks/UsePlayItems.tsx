import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Colors } from '../constants/colors';
import { imageUrl } from '../assests/data/track';
import { Track } from '../store/trackPlayerContext';
interface Props {
    track: Track,
    selectedTrack: (id: string, track: Track) => void;
    playing?: boolean;
    toggleFavorites: () => Promise<void>;
    isLiked?: boolean,
    currentTrackId: string | null;
}

const UsePlayItems: React.FC<Props> = ({ selectedTrack, track, playing = false, toggleFavorites, isLiked, currentTrackId }) => {
    const isPlaying = currentTrackId === track.id;
    return (
        <Pressable style={styles.container} onPress={() => selectedTrack(track.id,track)}>
            <View style={styles.left}>
                <Image source={{ uri: track?.artwork || imageUrl }} style={styles.image} />
                <View>
                    <Text style={(isPlaying && playing) ? { color: Colors.activeTitle } : { color: Colors.title }}>{track?.title ?? ''}</Text>
                    <Text>{track?.artist ?? ''}</Text>
                </View>
            </View>
            <View style={styles.playIcon}>
                <TouchableOpacity onPress={toggleFavorites}>
                    <Icon name={isLiked ? 'heart' : 'heart'}
                        size={20}
                        color={isLiked ? Colors.activeTitle : Colors.gray} />
                </TouchableOpacity>
                <Icon
                    name={(isPlaying && playing) ? 'pause' : 'play'} // Change icon based on play/pause state
                    size={20}
                    color={(isPlaying && playing) ? Colors.activeTitle : Colors.icon} // Color based on state
                />
            </View>
        </Pressable>
    );
};

export default UsePlayItems;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginVertical: 5,
        padding: 5,
        backgroundColor: '#ffff',
        borderRadius: 10,
        margin: 'auto',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    title: {
        color: Colors.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    playIcon: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10,
    },
});