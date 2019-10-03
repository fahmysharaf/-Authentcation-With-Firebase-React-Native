import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {Button,Card,CardItem,Input,Spinner} from './common';
import firebase from '../firebase';


 class LoginForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          email: '',
          password: '',
          error:'',
          loading: false,
      }

  }
  onLoginPressed(){
    const {email,password} = this.state;
    this.setState({loading: true, error: ''});
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onAuthSuccess.bind(this))
    .catch( () => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onAuthSuccess.bind(this))
            .catch(this.onAuthFailed.bind(this));
        });
  }
  onAuthSuccess(){
      this.setState({
          email: '',
          password:'',
          error: '',
          loading: false
      });
  }
  onAuthFailed(){
      this.setState({'error': 'Authentication Failed', loading:false });
  }
  showButtonOrSpinner(){
      if(this.state.loading) return <Spinner />
      return(
        <Button onPress={this.onLoginPressed.bind(this)}>Login</Button>

      );
  }
    render() {
        return (
            
                    <Card>
                        <CardItem>
                            <Input 
                             label='Email'
                             value = {this.state.email}
                             placeholder='Enter Your Name '
                             secureTextEntry={false}
                             onChangeText= { (email) => this.setState({email})}
                            />
                        </CardItem>
                        <CardItem>
                        <Input 
                             label='Password'
                             value= {this.state.password}
                             placeholder='Enter Your Password '
                             secureTextEntry={true}
                             onChangeText= {(password) => this.setState({password})}
                            />
                        </CardItem>
                       <Text style={styles.errorMessage}>{this.state.error}</Text>
                        <CardItem>
                                {this.showButtonOrSpinner() }
                        </CardItem>

                    </Card>
           
        );
    }
}

const styles = StyleSheet.create({
errorMessage:{
    fontSize:20,
    color:'#F00',
    alignSelf:'center',
    marginTop:5,
}
});
export default LoginForm;