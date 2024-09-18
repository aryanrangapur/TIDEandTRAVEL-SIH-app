import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Sidebar: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Tsunami')}>
        <Text style={styles.drawerText}>Tsunami</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Floods')}>
        <Text style={styles.drawerText}>Floods</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA',
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerText: {
    fontSize: 18,
    color: '#01579B',
  },
});

export default Sidebar;
