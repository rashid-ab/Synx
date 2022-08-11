import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text,Image,TextInput } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { Checkbox } from 'react-native-paper';
import Colors from '../components/colors'
import {Icon}  from 'react-native-elements'
import SwitchToggle from "react-native-switch-toggle";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Profile({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [checked, setChecked] = React.useState(false);
  const [on, setON] = React.useState(false);
  const onLoginPressed = () => {
    console.log(navigation)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      navigation.replace('Dashboard')
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    else{alert('asdasd')}
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{color:Colors['dark'].text,marginVertical:20,fontSize:hp('2.5%')}}>My Profile</Text>
        <View style={{flex:.25,alignItems: 'center'}}>
            <Image source={require('../assets/headerimage.png')} style={styles.image} />
            <TouchableOpacity style={{position:'absolute',bottom:15}}>
                <Icon containerStyle={{backgroundColor:'#804694',borderRadius:10,justifyContent:'center',height:30,width:30,}} name='pencil' type='evilicon' size={hp('2.5%')} color={Colors['dark'].text} />
            </TouchableOpacity>
        </View>
        <View style={{flex:.75,alignSelf: 'center',alignItems: 'center',width:'100%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('PI')} style={styles.tabs}>
                <Text>Personal Information</Text>
                <Icon name='keyboard-arrow-right' type='material' size={hp('3%')} color='#804694' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SoundSecurity')} style={styles.tabs}>
                <Text>Sounds & Security</Text>
                <Icon name='keyboard-arrow-right' type='material' size={hp('3%')} color='#804694' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Text>Pricing</Text>
                <Icon name='keyboard-arrow-right' type='material' size={hp('3%')} color='#804694' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Text>Notifications</Text>
                <Icon name='keyboard-arrow-right' type='material' size={hp('3%')} color='#804694' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Text>Dark Mode</Text>
                <SwitchToggle
                  switchOn={on}
                  onPress={() => setON(!on)}
                  circleColorOff='#322A3D'
                  circleColorOn='#322A3D'
                  backgroundColorOn='#804694'
                  backgroundColorOff='#493750'
                  containerStyle={{
                  // marginTop: 16,
                  width: 40,
                  height: 20,
                  borderRadius: 25,
                  padding: 5,
                }}
                circleStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 20,
                }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Text>Follow Us</Text>
                {/* <Icon name='keyboard-arrow-right' type='material' size={hp('3%')} color='#804694' /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Text>Logout</Text>
                <Icon name='logout' type='material' size={hp('3%')} color='#804694' />
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: Colors['dark'].background,
  },
  loginbtn:{
    width:'100%',
    paddingVertical:15,
    backgroundColor:'#804694',
    alignItems: 'center',
    borderRadius:5,
    
  },
  tabs:{
    backgroundColor:'#322A3D',
    padding:10,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    marginVertical:5,
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
    marginVertical:10
  },
  Input:{
    padding:10,
    backgroundColor: Colors['dark'].inputBackground,
    width:'100%',
    borderRadius:5
  },
  
  image: {
    width: wp('35%'),
    height: hp('15%'),
    borderRadius:50,
    marginBottom: 8,
  },
})