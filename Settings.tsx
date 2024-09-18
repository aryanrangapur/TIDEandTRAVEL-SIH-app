import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';

// Path to your image
const backgroundImage = require('./assets/background/background2.jpg'); // Update the path to your image

const Settings = ({ navigation }: any) => {
  // Function to handle navigation
  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  // Dummy function for account deletion
  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => navigation.navigate('SignIn') },
      ]
    );
  };
  
  // Dummy function for logout
  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: () => navigation.navigate('SignIn') },
      ]
    );
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.option} >
          <Text style={styles.optionText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} >
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Glossary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} >
          <Text style={styles.optionText}>Languages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleDeleteAccount}>
          <Text style={styles.optionText}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(245, 245, 245, 0.8)', // Semi-transparent background color
  },
  option: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 3, // Android shadow
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01579B', // Dark blue text
  },
});

export default Settings;
