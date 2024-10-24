import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import FloadPlayer from '../components/FloadPlayer';
import MusicPlayer from '../components/MusicPlayer';
import PlaylistsDetailsScreen from '../components/PlaylistsTracksList';
import PodcastsLists from '../homeComponents/PodcastsLists';
import ArtistTracksList from '../homeComponents/ArtistTracksList';

export type RootStackParamList = {
    FloadPlayer: undefined;
    MusicPlayer: undefined;
    StackNavigation: {
        screen: string;
        params: {
            playlistId: string;
            playlistName: string;
        };
    }
    PlaylistsDetailsScreen: { playlistId: string, playlistName: string };
    PodcastsLists:{podcastId: string, podcastName: string }
    ArtistTracksList:{artistId: string, artistName: string }
};


const Stack = createNativeStackNavigator<RootStackParamList>();

// Define types for PlayerStack props
interface PlayerStackProps {
    toggleFloatingPlayerVisibility: (isVisible: boolean) => void;
}
const StackNavigation: React.FC<PlayerStackProps> = ({ toggleFloatingPlayerVisibility }) => {
    const isFoucused = useIsFocused();
    useEffect(() => {
        toggleFloatingPlayerVisibility(!isFoucused);
    }, [isFoucused, toggleFloatingPlayerVisibility]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                animation: 'fade', // Fade in/out between screens
                animationTypeForReplace: 'push',
            }} >
            <Stack.Screen name="PlaylistsDetailsScreen" component={PlaylistsDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FloadPlayer" component={FloadPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="PodcastsLists" component={PodcastsLists} options={{ headerShown: false }}/>
            <Stack.Screen name="ArtistTracksList" component={ArtistTracksList} options={{ headerShown: false }}/>
        </Stack.Navigator >
    );
};

export default StackNavigation;
