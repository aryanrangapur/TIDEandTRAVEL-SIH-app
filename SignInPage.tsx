// SignInPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Path to your image
const backgroundImage = require('./assets/background/background2.jpg'); 

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (username && password) {
      navigation.navigate('Home');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#B0BEC5"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#B0BEC5"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.registerLink}
          
        >
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.8,
    backgroundColor: 'rgba(224, 247, 250, 0.8)', 
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0288D1',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#0288D1',
    fontSize: 16,
    color: '#0288D1',
  },
  button: {
    backgroundColor: '#0288D1',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#0288D1',
    fontSize: 16,
  },
});

export default SignInPage;
