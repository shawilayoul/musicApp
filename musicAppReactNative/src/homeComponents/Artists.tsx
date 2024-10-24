import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigations/StackNavigation';

const trendingSongs = [
    { id: 1, title: 'Mary', artist: 'FJU Lyon', image: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, title: 'John Doe', artist: 'FJU VillJuif', image: 'https://images.pexels.com/photos/6174126/pexels-photo-6174126.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, title: 'Kaique Rocha', artist: 'FJU Lyon', image: 'https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, title: 'Papa yaw', artist: 'FJU VillJuif', image: 'https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, title: 'Parfum', artist: 'FJU Paris', image: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/440746150_18333705205189775_7032145191093299904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mzqg7Wl3QGkQ7kNvgEfO5AT&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AB1KCudjLYsO5M79wUJlZFF&oh=00_AYAhPuQZNRmp8yjr2rOD6clOkCOqIImVNRL-YDxBXn2nDw&oe=67121751' },
];
type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;


const Artists = () => {
    const navigation = useNavigation<PlaylistscreenProp>();
    const goToArtistsLists = (playlistId: string, playlistName: string) => {
        navigation.navigate('StackNavigation', {
            screen: 'ArtistTracksList',
            params: {
                playlistId,
                playlistName,
            },
        });
    };
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.trendingScroll}
            >
                {trendingSongs.map((song) => (
                    <TouchableOpacity
                        key={song.id}
                        style={styles.songCard}
                        onPress={() => goToArtistsLists(song.id, song.title)}
                    >
                        <Image source={{ uri: song.image }} style={styles.songImage} />
                        <Text style={styles.songTitle}>{song.title}</Text>
                        <Text style={styles.songArtist}>{song.artist}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Artists;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0', // Gray background for the entire container
        paddingVertical: 16,
    },
    trendingScroll: {
        paddingHorizontal: 16, // Space around the scrollable area
    },
    songCard: {
        borderRadius: 12,
        marginRight: 16, // Space between cards
        alignItems: 'center',
        // Fixed width for cards
    },
    songImage: {
        width: 130, // Fixed width for images
        height: 130, // Fixed height for images
        borderRadius: 100,
    },
    songTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#333', // Dark text for contrast
        textAlign: 'center',
    },
    songArtist: {
        fontSize: 12,
        color: '#666', // Lighter color for artist name
        textAlign: 'center',
    },
});

