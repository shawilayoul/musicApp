import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Colors } from '../constants/colors';

const UseSearchHook = ({ searchText, onChangeSearch }) => {
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="search by song title ...."
                value={searchText}
                style={styles.searchBar}
                onChangeText={onChangeSearch}
            />
        </View>
    );
};

export default UseSearchHook;
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: Colors.lightblue,
    },
});
