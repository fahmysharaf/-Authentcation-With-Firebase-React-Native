import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';

const Input  = (props) => {
    return (
      <View style={styles.container}>
            <Text style={styles.label}>{props.label} </Text>
            <TextInput 
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={props.onChangeText}
            style={styles.input} />
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:60,

    },
    label:{
        flex:1,
        paddingLeft:10,
        fontSize: 16,
        color:'#707070',
        
    },
    input:{
        flex:1,
        paddingLeft:10,
        color:'#000',
        fontSize:16,
    }
})
export { Input };