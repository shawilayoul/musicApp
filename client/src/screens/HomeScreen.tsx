import React from 'react';
import {  View ,StyleSheet } from 'react-native';
import MusicPlayer from '../components/MusicPlayer';

const HomeScreen = () => {
    return (
        <View style={styles.container}><MusicPlayer /></View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});
