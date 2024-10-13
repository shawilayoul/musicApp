import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { imageUrl } from '../assests/data/track';
const HomeScreen = () => {

    const trendingSongs = [
        { id: 1, title: 'Song One', artist: 'Artist A', image: imageUrl },
        { id: 2, title: 'Song Two', artist: 'Artist B', image: imageUrl },
        { id: 3, title: 'Song Three', artist: 'Artist C', image: imageUrl },
    ];
    const playlists = [
        { id: 1, name: 'Top Hits', image: imageUrl },
        { id: 2, name: 'Chill Vibes', image: imageUrl },
        { id: 3, name: 'Workout', image: imageUrl },
        { id: 4, name: 'Pop Classics', image: imageUrl },
        { id: 5, name: 'Top Hits', image: imageUrl },
        { id: 6, name: 'Chill Vibes', image: imageUrl },
        { id: 7, name: 'Workout', image: imageUrl },
        { id: 8, name: 'Pop Classics', image: imageUrl },
    ];

    const podcasts = [
        { id: 1, name: 'Tech Talk', image: imageUrl },
        { id: 2, name: 'Daily News', image: imageUrl },
        { id: 3, name: 'Mindfulness', image: imageUrl },
    ];

    return (
        <ScrollView style={styles.container}>

            {/* Trending Music */}
            <Text style={styles.sectionTitle}>Trending Music</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingScroll}>
                {trendingSongs.map((song) => (
                    <TouchableOpacity key={song.id} style={styles.songCard}>
                        <Image source={{ uri: song.image }} style={styles.songImage} />
                        <Text style={styles.songTitle}>{song.title}</Text>
                        <Text style={styles.songArtist}>{song.artist}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* Playlists Section */}
            <Text style={styles.sectionTitle}>Music Playlists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {playlists.map((playlist) => (
                    <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
                        <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{playlist.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Podcasts Section */}
            <Text style={styles.sectionTitle}>Podcasts</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {podcasts.map((podcast) => (
                    <TouchableOpacity key={podcast.id} style={styles.playlistCard}>
                        <Image source={{ uri: podcast.image }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{podcast.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Best Picks Section */}
            <Text style={styles.sectionTitle}>Best Picks</Text>
            <View style={styles.bestPickCard}>
                <Image source={{ uri: imageUrl }} style={styles.bestPickImage} />
                <Text style={styles.bestPickName}>Curated Playlist</Text>
            </View>

            {/* Play Button */}
            <View style={styles.playButtonContainer}>
                <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playButtonText}>Play Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginVertical: 10,
    },
    horizontalScroll: {
        marginLeft: 20,
    },
    playlistCard: {
        marginRight: 15,
        width: 120,
        alignItems: 'center',
    },
    playlistImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    playlistName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    bestPickCard: {
        alignItems: 'center',
        marginVertical: 20,
    },
    bestPickImage: {
        width: '90%',
        height: 150,
        borderRadius: 10,
    },
    bestPickName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    playButtonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    playButton: {
        backgroundColor: '#6200ea',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    playButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
      trendingScroll: {
        marginLeft: 20,
        marginVertical: 10,
      },
      songCard: {
        marginRight: 15,
        width: 140,
        alignItems: 'center',
      },
      songImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
      },
      songTitle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      songArtist: {
        fontSize: 14,
        color: '#666'},
});


