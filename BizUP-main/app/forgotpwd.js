import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { FONT } from '../constants';
import { Stack, useRouter } from 'expo-router';

export default function Register() {
    const [email, setEmail] = useState('');
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source = {require("../assets/bizuplogo.png")}/> 
      
      <StatusBar style="auto" />

      <View style={styles.textView}>

        <Text style={{ fontFamily: FONT.regular, fontSize: 20, fontWeight: "600",
      height: 100, textAlign: "center" }}>
          Let us help you retrieve your password!
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder="  Email:"
          placeholderTextColor="#829494"
          TextEntry={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.textView}>
        <Text style={{ fontFamily: FONT.regular, fontSize: 15, fontWeight: "600",
        height: 100, textAlign: "center", width: 300 }}>
          After you confirm your email, we'll send a link to you within 2 minutes to change your password. 
        </Text>
      </View>

      <TouchableOpacity style={styles.registerBtn} onPress={() => {
        router.back()}}>
        <Text style={{ fontSize: 27, fontWeight: "700" }}>
          Confirm
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
    width: 250,
    height:270,
    marginBottom: 0,
    alignItems: "center",
  },

  textView: {
    height: 50,
    marginBottom: 0,
    marginTop: 10,
    justifyContent:"center",
    alignItems: "center",
  },

  inputView: {
    backgroundColor: "#f5fcfc",
    borderRadius: 10,
    width: "70%",
    height: 40,
    marginTop: 0,
    marginBottom: 30,
    justifyContent:"center",
    alignItems: "flex-start",
  },

  TextInput: {
    height: 45,
    flex: 1,
    padding: 0,
    marginLeft: 20,
    justifyContent:"center",
    alignItems: "flex-start",
  },

  registerBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor:"#27b8b0",
  },
});
