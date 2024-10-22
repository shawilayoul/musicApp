import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigations/StackNavigation';

const podcasts = [
    { id: '1', name: 'IntelliMen', image: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6' },
    { id: '2', name: 'Connexion Fun', image: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/449171017_18341427214189775_6697200753818002513_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4BVGM8yVyr0Q7kNvgGcEkHq&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ArHM3s8jiHb_0Uce5-xZzs2&oh=00_AYC8CGh0xn-HLW6zoxNq3fKAWkooh6Zz3MZpryoUk-eezw&oe=67120DFB' },
    { id: '3', name: 'Faith Talk', image: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6' },
    { id: '4', name: 'IntelliMen', image: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6' },
    { id: '5', name: 'Connexion Fun', image: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/449171017_18341427214189775_6697200753818002513_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4BVGM8yVyr0Q7kNvgGcEkHq&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ArHM3s8jiHb_0Uce5-xZzs2&oh=00_AYC8CGh0xn-HLW6zoxNq3fKAWkooh6Zz3MZpryoUk-eezw&oe=67120DFB' },
    { id: '6', name: 'Faith Talk', image: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/uploads%2FfaithTalk.jpg?alt=media&token=babed975-0497-4ed7-bc99-5be3b28775a6' },
];
type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;


const Podcasts = () => {
    const navigation = useNavigation<PlaylistscreenProp>();

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {podcasts.map((podcast) => (
                <TouchableOpacity key={podcast.id} style={styles.playlistCard}  onPress={() => goToplaylistDetain(podcast?.id, podcast.name)}>
                    <Image source={{ uri: podcast.image }} style={styles.playlistImage} />
                    <Text style={styles.playlistName}>{podcast.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Podcasts;

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
    },

});
