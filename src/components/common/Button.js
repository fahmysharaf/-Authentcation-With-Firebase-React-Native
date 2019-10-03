import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 35,
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#9933ff',
        marginVertical: 20
    },
    textStyle: {
        color: '#e6e6fa',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export { Button };