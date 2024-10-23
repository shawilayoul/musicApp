import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const episodes = [
    {
        'id': 101,
        'title': 'Episode 1',
        'description': 'Description of Episode 1',
        'audioUrl': 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/toutes-les-femmes-de-ma-vie-164527.mp3?alt=media&token=54fe8c50-1907-4376-ad60-02bd7c4eb90a',
        artwork: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6'
    },
    {
        'id': 102,
        'title': 'Episode 2',
        'description': 'Description of Episode 2',
        'audioUrl': 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/group-talking-68823.mp3?alt=media&token=7d2912dd-bb4c-41f5-8c65-d9154e830ab0',
        artwork: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6',
    },
    {
        'id': 103,
        'title': 'Episode 3',
        'description': 'Description of Episode 3',
        'audioUrl': 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/people-who-are-talking-in-a-courtyard-in-kotor-montenegro-19511.mp3?alt=media&token=5509baab-c7cc-47d2-9a5a-f6162112bda6',
        artwork: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/449171017_18341427214189775_6697200753818002513_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4BVGM8yVyr0Q7kNvgGcEkHq&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ArHM3s8jiHb_0Uce5-xZzs2&oh=00_AYC8CGh0xn-HLW6zoxNq3fKAWkooh6Zz3MZpryoUk-eezw&oe=67120DFB'
    },
    {
        'id': 104,
        'title': 'Episode 4',
        'description': 'Description of Episode 4',
        'audioUrl': 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/people-talking-ambience-24394.mp3?alt=media&token=6cfc33f1-4bb3-4633-8b9a-f818dbc07e73',
        artwork: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6',
    },
];


const PodcastsLists = ({ route }) => {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [playingEpisodeId, setPlayingEpisodeId] = useState(null);
    const { podcastId,
        podcastName } = route.params;

    /* useEffect(() => {
         const fetchPodcasts = async () => {
             try {
                 const response = await fetch('https://api.example.com/podcasts'); // Replace with your API
                 const data = await response.json();
                 setPodcasts(data);
             } catch (error) {
                 console.error('Error fetching podcasts:', error);
             } finally {
                 setLoading(false);
             }
         };
 
         fetchPodcasts();
     }, []);*/
     const playEpisode = async (episode) => {
        if (playingEpisodeId === episode.id) {
            // Pause if the same episode is clicked
            await TrackPlayer.pause();
            setPlayingEpisodeId(null);
        } else {
            await TrackPlayer.reset();
            await TrackPlayer.add({
                id: episode.id.toString(),
                url: episode.audioUrl,
                title: episode.title,
                artist: 'Podcast Artist',
                artwork: episode.artwork,
            });
            await TrackPlayer.play();
            setPlayingEpisodeId(episode.id);
        }
    };

    /* if (loading) {
         return <ActivityIndicator size="large" color="#0000ff" />;
     }*/

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{podcastName}</Text>
            <FlatList
                data={episodes}
                keyExtractor={episode => episode.id.toString()}
                numColumns={2}
                renderItem={({ item: episode }) => (
                    <View style={styles.episodeItem}>
                        <Image source={{ uri: episode.artwork }} style={styles.episodeImage} />
                        <Text style={styles.episodeTitle}>{episode.title}</Text>
                        <Text style={styles.episodeDescription}>{episode.description}</Text>
                        <TouchableOpacity
                            style={styles.playButton}
                            onPress={() => playEpisode(episode)}
                        >
                            {playingEpisodeId === episode.id ? (
                                <Text style={styles.buttonText}>Pause</Text>
                            ) : (
                                <Text style={styles.buttonText}>Play</Text>
                            )}
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
    episodeItem: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
        alignItems: 'center',
    },
    episodeImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    episodeTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});



