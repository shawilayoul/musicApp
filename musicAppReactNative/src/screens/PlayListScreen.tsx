import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { playlistImage } from '../assests/data/track';
import UseSearchHook from '../hooks/UseSearchHook';
import LoadingSpinner from '../components/LoadingSpinner';


type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;
interface PlaylistType {
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
        <SafeAreaView >
            <UseSearchHook searchText={searchText} onChangeSearch={onChangeSearch} />
            <FlatList style={styles.container} ListEmptyComponent={
                <View style={styles.notFount}>
                    <Text>No PlayList Found</Text>
                </View>
            } data={filteredTracks} keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => goToplaylistDetain(item.id, item.name)}>
                        <View style={styles.playlistItem}>
                            <View style={styles.items}>
                                <Image source={{ uri: item.url || playlistImage }} style={styles.playlistImage} />
                                <Text style={styles.platlistTitle}>{item.name}</Text>
                            </View>
                            <Icon name="chevron-forward-sharp" size={30} />
                        </View>

                    </TouchableOpacity>} />
        </SafeAreaView>
    );
};
export default PlayListScreen;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        margin: 'auto',
        marginVertical: 5,
    },
    platlistTitle: {
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    playlistItem: {
        display: 'flex',
        color: 'white',
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        backgroundColor: 'white',
        paddingVertical: 5,
    },
    items: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    playlistImage: {
        borderRadius: 10,
        height: 80,
        width: 80,
    },

    notFount: {
        alignItems: 'center',
    },
    loading: {
        flex: 1,
    },

});
