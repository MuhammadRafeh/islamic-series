import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = props => {
    return (
        <View style={styles.screen}>
            <Text>
            This is Serial Detail Screen.
            </Text>
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
});
