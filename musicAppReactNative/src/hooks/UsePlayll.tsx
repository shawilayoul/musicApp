import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Colors } from '../constants/colors';
import { Track } from '../store/trackPlayerContext';

interface Props {
    playing?: boolean;
    playAll: () => Promise<void>;
    songs: Track[]
}
const UsePlayll: React.FC<Props> = ({ playAll, playing = false, songs }) => {
    const total = songs.length;
    return (
        <View style={styles.playAllContainer}>
            <Text> {total} songs</Text>
            <TouchableOpacity style={styles.playAllIcons} onPress={playAll}>
                <Icon2
                    name="random"
                    size={25}
                    color={Colors.icon}
                />
                <Icon
                    name={playing ? 'pause-circle' : 'play-circle'} // Change icon based on play/pause state
                    size={40}
                    color={playing ? Colors.activeTitle : Colors.icon} // Color based on state
                />

            </TouchableOpacity>
        </View>
    );
};

export default UsePlayll;
const styles = StyleSheet.create({
    playAllContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    playAllIcons: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
    },
});
