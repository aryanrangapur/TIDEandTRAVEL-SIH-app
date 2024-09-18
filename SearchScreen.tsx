import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search for:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search beaches..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchIcon}> ➥</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>Search results will appear here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 15,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchButton: {
    padding: 12,
    backgroundColor: '#0288D1',
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24, // Adjust size if necessary
    color: 'white',
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 18,
    color: '#0288D1',
  },
});

export default SearchScreen;
