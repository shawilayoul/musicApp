import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/StackNavigation';
import { playlistsongs } from '../assests/data/track';
import TrackPlayer from 'react-native-track-player';


type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlaylistsDetailsScreen'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlaylistsDetailsScreen'>;

type DetailsScreenProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

const PlaylistsDetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {

    const { playlistId, playlistName } = route.params;

    const songs = playlistsongs[playlistId];

    const playSong = async (song: { id: any; url: any; title: any; artist: any; }) => {
        await TrackPlayer.reset(); // Reset player before adding a new track
        await TrackPlayer.add({
            id: song.id,
            url: song.url,
            title: song.title,
            artist: song.artist,
        });
        TrackPlayer.play();
    };

    return (
        <View><Text>{playlistName}</Text>
            <FlatList data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                (<TouchableOpacity onPress={() => playSong(item)} style={styles.container}>
                    <Text>{item.title}</Text>
                    <Text>{item.artist}</Text>
                </TouchableOpacity>)} />
        </View>
    );
};

export default PlaylistsDetailsScreen;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        margin: 'auto',
        backgroundColor: 'blue',
        padding: 10,
        color: 'white',
        marginVertical: 5,
        flexDirection:'row'
    },
});
