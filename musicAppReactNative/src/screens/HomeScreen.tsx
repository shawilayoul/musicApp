import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import MusicPlaylists from '../homeComponents/MusicPlaylists';
import TrendingSongs from '../homeComponents/TrendingSongs';
import Podcasts from '../homeComponents/Podcasts';
import Artists from '../homeComponents/Artists';

const HomeScreen = () => {

    return (
        <ScrollView style={styles.container}>
            {/* Playlists Section */}
            <Text style={styles.headerTitle}>Playlists you'll love</Text>
            <MusicPlaylists />
            {/* Podcasts Section */}
            <Text style={styles.sectionTitle}>Podcasts</Text>
            <Podcasts />
            {/* Artists */}
            <Text style={styles.sectionTitle}>Your favourite artists</Text>
            <Artists />
            {/* Trending Music */}
            <Text style={styles.sectionTitle}>Trending Music</Text>
            <TrendingSongs />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
});


