import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const trendingSongs = [
    { id: 1, title: 'Lumiére', artist: 'FJU Lyon', image: 'https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/369864382_596429732704193_5489624132335544205_n.jpg?stp=c240.0.960.960a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=31LqODMul54Q7kNvgHGP72F&_nc_ht=scontent-cdg4-1.xx&_nc_gid=ANCPO0W0yg2RoZq_H3aPxUp&oh=00_AYBCy9f4BccE6VT94l3o6j7Q5enC3pRE9YtfAdAWdPayNA&oe=67120F4A' },
    { id: 2, title: 'Mega Help', artist: 'FJU VillJuif', image: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/462691489_18356447122189775_1574066158548058831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_ddspqnb_MwQ7kNvgFjZpNO&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AX9CeDsHEwtvq52bdvaJpwS&oh=00_AYAw_k8Um9r17qaopctFL2u9eyJqmPAe-cikcRt5ghWHCg&oe=671201FE' },
    { id: 3, title: 'Parfum', artist: 'FJU Paris', image: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/440746150_18333705205189775_7032145191093299904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mzqg7Wl3QGkQ7kNvgEfO5AT&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AB1KCudjLYsO5M79wUJlZFF&oh=00_AYAhPuQZNRmp8yjr2rOD6clOkCOqIImVNRL-YDxBXn2nDw&oe=67121751' },
    { id: 4, title: 'Lumiére', artist: 'FJU Lyon', image: 'https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/369864382_596429732704193_5489624132335544205_n.jpg?stp=c240.0.960.960a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=31LqODMul54Q7kNvgHGP72F&_nc_ht=scontent-cdg4-1.xx&_nc_gid=ANCPO0W0yg2RoZq_H3aPxUp&oh=00_AYBCy9f4BccE6VT94l3o6j7Q5enC3pRE9YtfAdAWdPayNA&oe=67120F4A' },
    { id: 5, title: 'Mega Help', artist: 'FJU VillJuif', image: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/462691489_18356447122189775_1574066158548058831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_ddspqnb_MwQ7kNvgFjZpNO&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AX9CeDsHEwtvq52bdvaJpwS&oh=00_AYAw_k8Um9r17qaopctFL2u9eyJqmPAe-cikcRt5ghWHCg&oe=671201FE' },
    { id: 6, title: 'Parfum', artist: 'FJU Paris', image: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/440746150_18333705205189775_7032145191093299904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mzqg7Wl3QGkQ7kNvgEfO5AT&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AB1KCudjLYsO5M79wUJlZFF&oh=00_AYAhPuQZNRmp8yjr2rOD6clOkCOqIImVNRL-YDxBXn2nDw&oe=67121751' },
];

const TrendingSongs = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingScroll}>
            {trendingSongs.map((song) => (
                <TouchableOpacity key={song.id} style={styles.songCard}>
                    <Image source={{ uri: song.image }} style={styles.songImage} />
                    <Text style={styles.songTitle}>{song.title}</Text>
                    <Text style={styles.songArtist}>{song.artist}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default TrendingSongs;


const styles = StyleSheet.create({
    trendingScroll: {
        marginLeft: 10,
        marginVertical: 10,
    },
    songCard: {
        marginRight: 5,
        width: 120,
        alignItems: 'center',
    },
    songImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    songTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    songArtist: {
        fontSize: 14,
        color: '#666',
    },
});
