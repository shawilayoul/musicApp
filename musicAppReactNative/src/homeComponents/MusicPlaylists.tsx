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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {userPlaylist.map((playlist) => (
                <TouchableOpacity key={playlist.id} style={styles.playlistCard}  onPress={() => goToplaylistDetain(playlist.id, playlist.name)}>
                    <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
                    <Text style={styles.playlistName}>{playlist.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default MusicPlaylists;

const styles = StyleSheet.create({
    horizontalScroll: {
        marginLeft: 10,
    },
    playlistCard: {
        marginRight: 5,
        width: 120,
        alignItems: 'center',
    },
    playlistImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    playlistName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        textTransform:'uppercase',
    },
    loading: {
        flex: 1,
    },
});
