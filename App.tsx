// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInPage from './SignInPage'; 
import HomeScreen from './HomeScreen';
import GeospatialMapScreen from './GeospatialMapScreen';
import AlertHistoryScreen from './AlertHistoryScreen';
import SearchScreen from './SearchScreen'; 
import Settings from './Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GeospatialMap" component={GeospatialMapScreen} />
        <Stack.Screen name="AlertHistory" component={AlertHistoryScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
