import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Colors } from '../constants/colors';
import { playlists } from '../assests/data/track';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Searchbar, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigations/StackNavigation';
import { Track } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';

type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;

const PlayListScreen: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

    const navigation = useNavigation<PlaylistscreenProp>();


    const onChangeSearch = (text: React.SetStateAction<string>) => setSearchText(text);
    useEffect(() => {
        if (!searchText) { setFilteredTracks(playlists); }
        else {
            const filtered = playlists.filter((track) => track?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredTracks(filtered);
        }
    }, [searchText]);

    const goToplaylistDetain = (playlistId: string, playlistName: string) => {
        navigation.navigate('StackNavigation', {
            screen: 'PlaylistsDetailsScreen',
            params: {
                playlistId,
                playlistName,
            },
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="search by playList name ...."
                    value={searchText}
                    style={styles.searchBar}
                    onChangeText={onChangeSearch}
                />
            </View>
            <FlatList data={filteredTracks} keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.listbtn}
                        onPress={() => goToplaylistDetain(item.id, item.name)}>
                        <View style={styles.playlist}>
                            <View style={styles.playlistImage}>
                                <Image source={{ uri: item.url }} width={50} height={50} />
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
        marginVertical: 10,
    },
    searchContainer: {
        marginVertical: 5,
    },
    playlist: {
        display: 'flex',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    playlistImage: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: Colors.lightblue,
    },
    listbtn: {

    },
    platlistTitle: {
        fontSize: 22,
    },
});
