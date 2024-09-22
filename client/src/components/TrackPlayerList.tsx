import React from 'react';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { Track } from '../assests/data/track';
import { usePlayerContext } from '../store/trackPlayerContext';

type TrackPlayerListType = {
    item: Track,
};
const TrackPlayerList = ({ item }: TrackPlayerListType) => {
    const { setTrack } = usePlayerContext();
    return (
        <Pressable style={styles.container} onPress={()=>setTrack(item)}>
            <View>
                <Image source={{ uri: item.artwork }} style={styles.image} />
            </View>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.artist}</Text>
            </View>
        </Pressable>
    );
};

export default TrackPlayerList;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        padding: 5,
        backgroundColor: '#ffff',
        margin: 5,
        borderEndEndRadius: 5,
        cursor: 'pointer',
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

});
