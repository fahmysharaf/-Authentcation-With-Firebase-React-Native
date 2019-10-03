import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 60,
        backgroundColor: '#9933ff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    },
    textStyle: {
       color: '#e6e6fa',
       fontSize: 17,
       fontWeight: 'bold'
    }
});

export { Header };