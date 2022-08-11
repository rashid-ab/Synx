/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SplashScreen from '../screens/SplashScreen'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Dashboard from '../screens/Dashboard'
import Profile from '../screens/profile'
import PI from '../screens/personalinfo'
import SoundSecurity from '../screens/soundsecurity'
import Colors from '../components/colors'
import {Icon}  from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
function TabsNavigator() {
  // const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator initialRouteName='profile' labeled={false} shifting={true}
      inactiveColor="#95a5a6"
      tabBar={{backgroundColor: 'red'}}
      barStyle={{ backgroundColor: '#322A3D',height:hp('10%'),alignItem:'center'}}
      
      >
      <BottomTab.Screen name="Dash" component={Dashboard} options={{
        
                    tabBarIcon: ({focused}) => (<Icon containerStyle={{backgroundColor:focused?'#804694':'#322A3D',borderRadius:50,justifyContent:'center',height:40,width:40,}} name='md-grid-outline' type='ionicon' size={hp('2.5%')} color={Colors['dark'].text} />)
                }}/>
      <BottomTab.Screen name="reverse" component={Dashboard} options={{
                    tabBarIcon: ({focused}) => (<Icon containerStyle={{backgroundColor:focused?'#804694':'#322A3D',borderRadius:50,justifyContent:'center',height:40,width:40,}} name='refresh-cw' type='feather' size={hp('2.5%')} color={Colors['dark'].text} />)
                }}/>
      <BottomTab.Screen name="wallet" component={Dashboard} options={{
                    tabBarIcon: ({focused}) => (<Icon containerStyle={{backgroundColor:focused?'#804694':'#322A3D',borderRadius:50,justifyContent:'center',height:40,width:40,}} name='wallet-outline' type='ionicon' size={hp('2.5%')} color={Colors['dark'].text} />)
                }}/>
      <BottomTab.Screen name="profile" component={Profile} options={{
                    tabBarIcon: ({focused}) => (<Icon containerStyle={{backgroundColor:focused?'#804694':'#322A3D',borderRadius:50,justifyContent:'center',height:40,width:40,}} name='user' type='feather' size={hp('2.5%')} color={Colors['dark'].text} />)
                }}/>
    </BottomTab.Navigator>
    );
}
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
        <Stack.Screen name="PI" component={PI} />
        <Stack.Screen name="SoundSecurity" component={SoundSecurity} />
        <Stack.Screen name="Dashboard" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;