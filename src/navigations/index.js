/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Dimensions, TouchableOpacity,StyleSheet,Text } from 'react-native';
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
import Notifications from '../screens/notifications'
import Vault1 from '../screens/vault1'
import ActionSheet from "react-native-actions-sheet";
import Colors from '../components/colors'
import {Icon}  from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
function TabsNavigator() {
  const windowWidth = Dimensions.get('window').width;
  const actionSheetRef = React.useRef(null);
  // const colorScheme = useColorScheme();
  return (
    <>
    <View style={{width:windowWidth,justifyContent:'center',alignContent:"center",alignItems:"center", position:'absolute',zIndex:999999999,bottom:60}}>
      <TouchableOpacity onPress={()=>{actionSheetRef.current.show()}} style={{backgroundColor:'#824597',height:hp('8'),width:wp('17'),alignItem:'center',justifyContent:'center',borderRadius:50}}>
          <Icon
            name='upload'
            type='feather'
            size={25}
            color='white'
          />
      </TouchableOpacity>
    </View>
 <BottomTab.Navigator initialRouteName='Dash' labeled={false} shifting={true}
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
    <ActionSheet ref={actionSheetRef} bounciness={10} bounceOnOpen={true} containerStyle={{
                backgroundColor: Colors['dark'].actionSheet,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                padding: 12,
                postion:'absolute'
    }}>
      <View style={styles.container} >
        <View style={{flex:1,paddingTop:40}}>
        <View style={{flex:1}}></View>
            <View style={styles.inputcontainer}>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Upload Document</Text>
                    
                </View>
                </View>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Upload Photos</Text>
                    
                </View>
                </View>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Scan Document</Text>
                    
                </View>
                </View>
                <View style={[styles.soundtab]}>
                <View style={styles.soundtabs}>
                    <Text>Take Photos</Text>
                    
                </View>
                </View>
                <View style={[styles.soundtab]}>
                <View style={styles.soundtabs}>
                    <Text>Record Audio</Text>
                    
                </View>
                </View>
                <View style={[styles.soundtab]}>
                <View style={styles.soundtabs}>
                    <Text>Create Vault</Text>
                    
                </View>
                </View>
            </View>
            </View>
    </View>
    </ActionSheet>
    </>
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
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Vault1" component={Vault1} />
        <Stack.Screen name="Dashboard" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: Colors['dark'].background,
  },
  
  tabs:{
    backgroundColor:'#322A3D',
    padding:15,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    marginVertical:5,
    borderRadius:5
  },
  soundtabs:{
    backgroundColor:'#322A3D',
    padding:10,
    width:'100%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    // marginVertical:5,
    borderBottomWidth:.2,
    borderBottomColor:'white',
    borderRadius:5
  },
  soundtab:{
    backgroundColor:'#322A3D',
    padding:10,    
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    // marginVertical:5,
    borderRadius:5
  },
  row: {
    marginTop: 4,
    width:'100%',
    alignItems:'center'
  },
  inputcontainer:{
    width:'100%'
  },
  link: {
    fontWeight: 'bold',
  },
  label:{
    color:Colors['dark'].text,
    marginVertical:10,
    fontWeight:'bold'
  },
  Input:{
    padding:10,
    backgroundColor: Colors['dark'].inputBackground,
    width:'100%',
    borderRadius:5
  },
  
  image: {
    width: wp('55%'),
    height: hp('25%'),
    marginBottom: 8,
  },
})
export default App;