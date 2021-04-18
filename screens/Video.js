import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Video = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is Video Play Screen.
            </Text>
        </View>
    );
}

export default Video;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
});
