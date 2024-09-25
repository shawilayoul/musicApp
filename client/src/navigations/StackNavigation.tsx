import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FloadPlayer from '../components/FloadPlayer';
import MusicPlayer from '../components/MusicPlayer';

type RootStackParamList = {
    FloadPlayer: undefined;
    MusicPlayer: {
        screen: string;
    };
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="FloadPlayer" component={FloadPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
