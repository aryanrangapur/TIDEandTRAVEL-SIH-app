import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // Initial scale

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 1 second fade-in
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000, // 1 second scale-up
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 1500); // Adjust this to match the animation duration

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim]);

  const animatedStyle = {
    opacity: fadeAnim,
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <Text style={styles.text}>TIDE & TRAVEL</Text>
      </Animated.View>
      <Animated.View style={[styles.circle, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', 
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  circle: {
    position: 'absolute',
    width: 250, 
    height: 250,
    borderRadius: 75,
    backgroundColor: '#01579B', 
    opacity: 0.2,
    zIndex: -1, 
  },
});

export default SplashScreen;
