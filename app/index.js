import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput,
  Button,
  TouchableOpacity, 
} from 'react-native';
import { FONT } from '../constants';
import { Stack, useRouter } from 'expo-router';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    fetch('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=bizup&table=user_info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        response.json();
        if (responseData.success) {
          router.push('./home');
        } else {
          alert(response[0].Message);
        }
      })
      .catch((error) => {
        alert("Error"+error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source = {require("../assets/bizuplogo.png")}/> 
      
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={{ fontFamily: FONT.regular, fontSize: 18 }}
          placeholder="Email"
          placeholderTextColor="#829494"
          TextEntry={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={{ fontFamily: FONT.regular, fontSize: 18 }}
          placeholder="Password"
          placeholderTextColor="#829494"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <TouchableOpacity style={styles.register_account} onPress={() => {
        router.push('./register')}}>
        <Text style={{ fontFamily: FONT.regular, fontSize: 18 }}>
          Don't have an account? Register here.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgot_button} onPress={() => {
        router.push('./forgotpwd')}}>
        <Text style={{ fontFamily: FONT.regular, fontSize: 18 }}>
          Forgot Password?
        </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
        handleLogin}}>
        <Text style={{ fontFamily: FONT.bold, fontSize: 27, textAlignVertical: "center",
        textAlign: "center"}}>
          LOGIN
          </Text> 
      </TouchableOpacity> 
    </View>
  );
}

// Logo image styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6e3e0',
    alignItems: 'center',
  },

  image :{
    height: 360,
    marginBottom: 0,
  },

  inputView: {
    backgroundColor: "#f5fcfc",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    justifyContent:"center",
    alignItems: "center",
  },

  TextInput: {
    height: 45,
    flex: 1,
    padding: 0,
    marginLeft: 20,
    justifyContent:"center",
  },

  register_account: {
    height: 35,
    marginBottom: 0,
  },

  forgot_button: {
    height: 70,   
    marginBottom: 0,
  },

  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 0,
    backgroundColor:"#27b8b0",
  },
});



