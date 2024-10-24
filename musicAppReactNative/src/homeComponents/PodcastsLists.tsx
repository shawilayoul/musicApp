import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import LoadingSpinner from '../components/LoadingSpinner';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';
import { RouteProp } from '@react-navigation/native';

interface Episode {
    url: string;
    id: string ;
    title: string;
    description: string;
    artwork: string;
}
interface Props {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
}
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PodcastsLists'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PodcastsLists'>;

const PodcastsLists: React.FC<Props> = ({ route }) => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [playingEpisodeId, setPlayingEpisodeId] = useState<string | null>(null);
    const { podcastId,
        podcastName } = route.params;

    useEffect(() => {
        const getPodcastEpisodes = async () => {
            try {
                const response = await axios.get(`https://musicserver-h836.onrender.com/podcast/podcastEpisode/${podcastId}`);
                setEpisodes(response.data.episodes);
            } catch (error) {
                console.log('error getting user platlist', error);
            } finally {
                setLoading(false);
            }
        };
        getPodcastEpisodes();
    }, [podcastId]);

    const playEpisode = async (episode: Episode) => {
        if (playingEpisodeId === episode.id) {
            // Pause if the same episode is clicked
            await TrackPlayer.pause();
            setPlayingEpisodeId(null);
        } else {
            await TrackPlayer.reset();
            await TrackPlayer.add({
                id: episode.id.toString(),
                url: episode.url,
                title: episode.title,
                artwork: episode.artwork,
            });
            await TrackPlayer.play();
            setPlayingEpisodeId(episode.id);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{podcastName}</Text>
            <FlatList
                data={episodes}
                keyExtractor={episode => episode.id.toString()}
                numColumns={2}
                renderItem={({ item }: { item: Episode }) => (
                    <View style={styles.episodeCard}>
                        <Image source={{ uri: item.artwork }} style={styles.episodeImage} />
                        <View style={styles.episodeDetails}>
                            <Text style={styles.episodeTitle}>{item.title}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.playButton}
                            onPress={() => playEpisode(item)}
                        >
                            <Text style={styles.buttonText}>
                                {playingEpisodeId === item.id ? 'Pause' : 'Play'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default PodcastsLists;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    episodeCard: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensures button is at the bottom
        height: 300, // Fixed height to keep consistent spacing
    },
    episodeImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    episodeDetails: {
        flex: 1, // Take available space
        alignItems: 'center',
        justifyContent: 'center', // Center text vertically
    },
    episodeTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginBottom: 4,
    },
    episodeDescription: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
        marginBottom: 8,
    },
    playButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        width: '100%', // Full width button
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


