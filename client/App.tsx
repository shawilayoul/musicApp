/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/**/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { enableScreens } from 'react-native-screens';
import PlayListScreen from './src/screens/PlayListScreen';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';



const Tab = createBottomTabNavigator();
enableScreens();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="PlayList" component={PlayListScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
