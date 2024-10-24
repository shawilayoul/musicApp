import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';
import axios from 'axios';
import { playlistImage } from '../assests/data/track';
import UseSearchHook from '../hooks/UseSearchHook';
import LoadingSpinner from '../components/LoadingSpinner';


type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;
interface PlaylistType {
    image: string;
    url: string;
    id: string;
    name: string;
}
const PlayListScreen: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<PlaylistType[]>([]);

    const navigation = useNavigation<PlaylistscreenProp>();
    const [loading, setLoading] = useState(true);
    const [userPlaylist, setUserPlaylist] = useState<PlaylistType[]>([]);

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

    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);

    useEffect(() => {
        if (!searchText) { setFilteredTracks(userPlaylist); }
        else {
            const filtered = userPlaylist.filter((track) => track?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText, userPlaylist]);

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
        <SafeAreaView style={styles.safeArea}>
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <FlatList
                style={styles.container}
                ListEmptyComponent={
                    <View style={styles.notFound}>
                        <Text style={styles.notFoundText}>No Playlist Found</Text>
                    </View>
                }
                data={filteredTracks}
                keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
                numColumns={2} // Display items in two columns
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => goToplaylistDetain(item.id, item.name)}
                        style={styles.playlistItem}
                        activeOpacity={0.7} // Feedback on touch
                    >
                        <View style={styles.itemContent}>
                            <Image source={{ uri: item?.image || playlistImage }} style={styles.playlistImage} />
                            <Text style={styles.playlistTitle}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.contentContainer} // Add padding to the FlatList
            />
        </SafeAreaView>
    );
};
export default PlayListScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Clean, bright background
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    notFound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        fontSize: 18,
        color: '#999',
        fontWeight: 'bold',
    },
    playlistItem: {
        flex: 1,
        margin: 6, // Space between items
        padding: 16,
        backgroundColor: '#ffffff',// '#f9f9f9', // Soft background for items
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Enhanced elevation for better depth
    },
    itemContent: {
        flex: 1,
        flexDirection: 'column', // Change to column for vertical stacking
        alignItems: 'center',
        justifyContent: 'center', // Center items vertically
    },
    playlistImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 8, // Space between image and title
    },
    playlistTitle: {
        fontSize: 18, // Increased font size for better readability
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        textTransform: 'uppercase', // Center the title
    },
    contentContainer: {
        paddingBottom: 16, // Bottom padding for FlatList
    },
    loading: {
        flex: 1,
    },
});
