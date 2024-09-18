// AlertHistoryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Everthing is safe! No Alert Detected.</Text>
      {/* Add alert history implementation here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default AlertHistoryScreen;
