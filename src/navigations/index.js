/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Dashboard from '../screens/Dashboard'
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SplashScreen" 
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
      <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;