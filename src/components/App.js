import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {Header, Spinner,Button} from './common';
import LoginForm from './LoginForm';
import firebase from '../firebase';

export default class App extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            loggedIn: null
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged( (user) => {
            if(user){
                this.setState({loggedIn: true});
            }else
            {
                this.setState({loggedIn: false});

            }
        });
    }
   
    showContents(){
        switch(this.state.loggedIn){
            case true: 
                    return(
                        <View style={styles.loggedOut}>
                             <Button onPress={() => firebase.auth().signOut() }>Log Out </Button>
                      </View>
                    );
            case false: 
                    return <LoginForm />;
            default:
                return <Spinner />;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Auth' />
                {this.showContents() }                
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
container:{
    flex:1,
},
loggedOut:{
    height:60,
    margin:20,
}

});