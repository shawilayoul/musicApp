import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;

interface PlaylistType {
    image: string;
    url: string;
    id: string;
    name: string;
}

const MusicPlaylists = () => {
    const [loading, setLoading] = useState(true);
    const [userPlaylist, setUserPlaylist] = useState<PlaylistType[]>([]);
    const navigation = useNavigation<PlaylistscreenProp>();

    useEffect(() => {
        const getUserPlaylist = async () => {
            try {
                const response = await axios.get('https://musicserver-h836.onrender.com/playlist/66fc66651c032413823ea923');
                setUserPlaylist(response.data);
            } catch (error) {
                console.log('error getting user platlist', error);
            } finally {
                setLoading(false);
            }
        };
        getUserPlaylist();
    }, []);

    const goToplaylistDetain = (playlistId: string, playlistName: string) => {
        navigation.navigate('StackNavigation', {
            screen: 'PlaylistsDetailsScreen',
            params: {
                playlistId,
                playlistName,
            },
        });
    };

    if (loading) {
        return <View style={styles.loading}>
            <LoadingSpinner />
        </View>;
    }
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
            >
                {userPlaylist.map((playlist) => (
                    <TouchableOpacity
                        key={playlist.id}
                        style={styles.playlistCard}
                        onPress={() => goToplaylistDetain(playlist.id, playlist.name)}
                    >
                        <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{playlist.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default MusicPlaylists;

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
        textTransform: 'uppercase'
    },
    loading: {
        flex: 1,
    },
});
