import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import { FONT } from '../constants';
import { Stack, useRouter } from 'expo-router';

export default function NewPassword() {
  const [Clientotp, setClientOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const router = useRouter();

  const handleResetPassword = () => {
    // Prepare the data to be sent
    const data = {
      Clientotp: Clientotp,
      newpassword: newPassword,
    };

    // Send a POST request to the resetpwd.php script
    fetch('http://192.168.10.146/BizUP/all_php_functions/newpwd.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response from the server
        if (result.success) {
          Alert.alert('Success', result.message);
          router.back().back();
        } else {
          Alert.alert('Error', result.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to send the request. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/bizuplogo.png")} />
      <View style={styles.textView}>
        <Text style={{ fontFamily: FONT.regular, fontSize: 20, fontWeight: "600", height: 100, textAlign: "center" }}>
          Enter OTP and New Password
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder="  OTP:"
          placeholderTextColor="#829494"
          TextEntry={true}
          onChangeText={(Clientotp) => setClientOTP(Clientotp)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={{ fontSize: 18 }}
          placeholder="  New Password:"
          placeholderTextColor="#829494"
          secureTextEntry={true}
          onChangeText={(newpassword) => setNewPassword(newpassword)}
        />
      </View>
      <TouchableOpacity style={styles.registerBtn} onPress={handleResetPassword}>
        <Text style={{ fontSize: 27, fontWeight: "700" }}>
          Reset Password
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
  image: {
    width: 250,
    height: 270,
    marginBottom: 0,
    alignItems: "center",
  },
  textView: {
    height: 50,
    marginBottom: 0,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#f5fcfc",
    borderRadius: 10,
    width: "70%",
    height: 40,
    marginTop: 0,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  TextInput: {
    height: 45,
    flex: 1,
    padding: 0,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#27b8b0",
  },
});
