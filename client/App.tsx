/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/**/

import * as React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { enableScreens } from 'react-native-screens';
import PlayListScreen from './src/screens/PlayListScreen';
import HomeScreen from './src/screens/HomeScreen';
import SongsScreen from './src/screens/SongScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerProvider from './src/store/trackPlayerContext';
import FloadPlayer from './src/components/FloadPlayer';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, { Capability, RatingType, RepeatMode } from 'react-native-track-player';
import { RootStackParamList } from './src/navigations/StackNavigation';
import { Colors } from './src/constants/colors';

// Define the Tab Navigator's parameter list
export type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  songs: undefined;
  Favorites: undefined;
  PlayList: undefined;
  StackNavigation:undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

enableScreens();
const App = () => {
  const [isFloatingPlayerVisible, setIsFloatingPlayerVisible] = React.useState(true);
  React.useEffect(() => {
    const setupPlayer = async () => {
      try {
        // Setup the player
        await TrackPlayer.setupPlayer({
          maxCacheSize: 1024 * 10,
        });
        // Update options for the player (e.g., notifications, capabilities)
        await TrackPlayer.updateOptions({
          ratingType: RatingType.Heart,
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],/*
          notificationCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],*/
        });

        //await TrackPlayer.setVolume(0.5);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      } catch (error) {
        console.error('Error setting up TrackPlayer:', error);
      }
    };

    setupPlayer();
  }, []);

  const toggleFloatingPlayerVisibility = (visible: boolean | ((prevState: boolean) => boolean)) => {
    setIsFloatingPlayerVisible(visible);
  };
  return (
    <NavigationContainer>
      <PlayerProvider>
        <View style={styles.container}>
          <Tab.Navigator screenOptions={{
          }}
            tabBar={(props) => (
              <View>
                {isFloatingPlayerVisible && <FloadPlayer />}
                <BottomTabBar {...props} />
              </View>
            )} >
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarIcon: () => (
                <Icon name="home" size={25} color="#0a2472" />
              ),
            }} />
            <Tab.Screen name="songs" component={SongsScreen} options={{
              headerTitle:'All Songs',
              tabBarIcon: () => (
                <Icon name="musical-notes" size={25} color="#0a2472" />
              ),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
              tabBarIcon: () => (
                <Icon name="heart" size={25} color={Colors.activeTitle} />
              ),
            }} />
            <Tab.Screen name="PlayList" component={PlayListScreen} options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="playlist-music" size={25} color="#0a2472" />
              ),
            }} />
              <Tab.Screen name="StackNavigation" options={{
              headerShown: false, tabBarButton: () => null,  // This hides the tab icon
            }}>
                {() => <StackNavigation toggleFloatingPlayerVisibility={toggleFloatingPlayerVisibility} />}
              </Tab.Screen>
          </Tab.Navigator>
        </View>
      </PlayerProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
