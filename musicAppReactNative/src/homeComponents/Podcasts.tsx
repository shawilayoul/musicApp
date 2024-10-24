import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigations/StackNavigation';
import axios from 'axios';


type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;


const Podcasts = () => {
    const navigation = useNavigation<PlaylistscreenProp>();
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const getPodcasts = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/podcast');
                setPodcasts(response.data);
            } catch (error) {
                console.log('error getting podcasts', error);
            }
        };
        getPodcasts();
    }, []);

    const goToplaylistDetain = (podcastId: string, podcastName: string) => {
        navigation.navigate('StackNavigation', {
            screen: 'PodcastsLists',
            params: {
                podcastId,
                podcastName,
            },
        });
    };
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
            >
                {podcasts.map(({ title, artwork, id }) => (
                    <TouchableOpacity
                        key={id}
                        style={styles.playlistCard}
                        onPress={() => goToplaylistDetain(id, title)}
                    >
                        <Image source={{ uri: artwork }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Podcasts;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0', // Gray background for the entire container
        paddingVertical: 16,
    },
    horizontalScroll: {
        paddingHorizontal: 16, // Space around the scrollable area
    },
    playlistCard: {
        backgroundColor: '#fff', // White background for each card
        borderRadius: 12,
        marginRight: 16, // Space between cards
        elevation: 2, // Shadow for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',
        padding: 8,
    },
    playlistImage: {
        width: 120, // Fixed width for images
        height: 120, // Fixed height for images
        borderRadius: 10,
    },
    playlistName: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#333', // Dark text for contrast
        textAlign: 'center',
    },
    loading:{
        flex:1,
    },
});
