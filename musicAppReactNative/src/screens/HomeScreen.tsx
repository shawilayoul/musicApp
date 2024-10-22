import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import MusicPlaylists from '../homeComponents/MusicPlaylists';
import TrendingSongs from '../homeComponents/TrendingSongs';
import Podcasts from '../homeComponents/Podcasts';

const HomeScreen = () => {

    return (
        <ScrollView style={styles.container}>
            {/* Playlists Section */}
            <Text style={styles.sectionTitle}>Music Playlists</Text>
            <MusicPlaylists />
            {/* Trending Music */}
            <Text style={styles.sectionTitle}>Trending Music</Text>
            <TrendingSongs />
            {/* Podcasts Section */}
            <Text style={styles.sectionTitle}>Podcasts</Text>
            <Podcasts />

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
});


