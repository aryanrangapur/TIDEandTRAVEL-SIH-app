import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

// Path to your image
const backgroundImage = require('./assets/background/background2.jpg'); 

const HomeScreen = () => {
  const navigation = useNavigation();

  const WindPress = () => {
    Linking.openURL('https://samudra.incois.gov.in/app/').catch((err) => console.error("Failed to open URL:", err));
  };

  const WavePress = () => {
    Linking.openURL('https://samudra.incois.gov.in/app/').catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello Aryan!</Text>
          <Text style={styles.date}>7 Sept, 2024</Text>
        </View>

        <View style={styles.chart}>
          <Text style={styles.chartPlaceholder}>Weather 🌤️</Text>
        </View>

        <View style={styles.content}>
          {/* Render the buttons using the modified styles */}
          <TouchableOpacity
            style={styles.buttonCard}
            onPress={() => navigation.navigate('GeospatialMap')}
          >
            <Text style={styles.buttonText}>Geospatial Map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCard} onPress={WindPress}>
            <Text style={styles.buttonText}>Winds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCard} onPress={WavePress}>
            <Text style={styles.buttonText}>Significant Wave Heights</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCard}
            onPress={() => navigation.navigate('AlertHistory')}
          >
            <Text style={styles.buttonText}>Alert History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            }}
          >
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={styles.navIcon}>🔍</Text>
            <Text style={styles.navText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.navIcon}>⚙️</Text>
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'rgba(224, 247, 250, 0.6)', // Background color with some opacity
  },
  header: {
    backgroundColor: '#0288D1',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  date: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 5,
  },
  chart: {
    height: height * 0.2,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholder: {
    color: '#9E9E9E',
    fontSize: 23,
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  buttonCard: {
    backgroundColor: '#0288D1',
    borderRadius: 17,
    padding: 15,
    marginVertical: 0,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.09,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
  },
  navText: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 3,
  },
});

export default HomeScreen;
