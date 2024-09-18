import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

// Path to your image
const backgroundImage = require('./assets/background/background1.jpg'); // Update the path to your image

const GeospatialMapScreen = () => {
  const handleIncoisMapPress = () => {
    Linking.openURL('https://incois.gov.in/geoportal/OON/index.html');
  };

  const handleHeatmapPress = () => {
    // Placeholder for Heatmap button
    Linking.openURL('https://samudra.incois.gov.in/app/');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Geospatial Map Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleIncoisMapPress}
        >
          <Text style={styles.buttonText}>INCOIS Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleHeatmapPress}
        >
          <Text style={styles.buttonText}>Coastal Alert Map</Text>
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
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(224, 247, 250, 0.6)', // Background color with some opacity to make content readable
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01579B', // Dark blue text
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0288D1', // Blue button background
    padding: 18,
    borderRadius: 20, // Soft corners
    marginBottom: 20,
    width: '80%', // Button fills 80% of the screen width
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text on button
    fontSize: 17,
    fontWeight: '600',
  },
});

export default GeospatialMapScreen;
