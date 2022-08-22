import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { Checkbox } from 'react-native-paper';
import Colors from '../components/colors'
import SwitchToggle from "react-native-switch-toggle";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function LoginScreen({ navigation }) {
  const [fname, setName] = useState({ value: '', error: '' })
  const [lname, setlName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [on, setON] = React.useState(true);
  const [password, setPassword] = useState({ value: '', error: '' })
  const onSignUpPressed = () => {
    const nameError = nameValidator(fname.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }


  return (
    <View style={styles.container} >
        <BackButton goBack={navigation.goBack} title="Synx Vault 1" />
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
  )
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
    // paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    // marginVertical:5,
    borderBottomWidth:.2,
    borderBottomColor:'white',
    // borderRadius:5
  },
  soundtab:{
    backgroundColor:'#322A3D',
    padding:10,    
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItem:'center',
    // marginVertical:5,
    // borderRadius:5
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