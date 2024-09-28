import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, playlists } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-paper';
import { RootStackParamList } from '../navigations/StackNavigation';

type PlaylistscreenProp = StackNavigationProp<RootStackParamList, 'StackNavigation'>;

const PlayListScreen: React.FC = () => {

    const navigation = useNavigation<PlaylistscreenProp>();

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
        <SafeAreaView>
            <FlatList data={playlists} keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.container}
                        onPress={() => goToplaylistDetain(item.id, item.name)}>
                        <Text style={styles.playlist}>{item.name}</Text>
                    </TouchableOpacity>} />
        </SafeAreaView>
    );
};
export default PlayListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        margin: 'auto',
    },
    playlist: {
        display: 'flex',
        backgroundColor: Colors.icon,
        color: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        height: 50,
        alignItems: 'center',
    },
});
