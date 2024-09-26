import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FloadPlayer from '../components/FloadPlayer';
import MusicPlayer from '../components/MusicPlayer';
import { useIsFocused } from '@react-navigation/native';

export type RootStackParamList = {
    FloadPlayer: undefined;
    MusicPlayer: undefined;
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
            <Stack.Screen name="FloadPlayer" component={FloadPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
};

export default StackNavigation;
