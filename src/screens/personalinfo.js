import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { Checkbox } from 'react-native-paper';
import Colors from '../components/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function LoginScreen({ navigation }) {
  const [fname, setName] = useState({ value: '', error: '' })
  const [lname, setlName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
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
    <KeyboardAvoidingView style={styles.container} behavior="height">
        <BackButton goBack={navigation.goBack} title="Personal Info" />
    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <View style={{flex:.8,paddingTop:40}}>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    placeholder="Name"
                    returnKeyType="next"
                    placeholderColor='#8B90A8'
                    style={styles.Input}
                    value={fname.value}
                    onChangeText={(text) => setName({ value: text, error: '' })}
                    error={!!fname.error}
                    errorText={fname.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    placeholder="Last Name"
                    returnKeyType="next"
                    placeholderColor='#8B90A8'
                    style={styles.Input}
                    value={lname.value}
                    onChangeText={(text) => setlName({ value: text, error: '' })}
                    error={!!lname.error}
                    errorText={lname.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Email address</Text>
                <TextInput
                    placeholder="example@gmail.com"
                    returnKeyType="next"
                    placeholderColor='#8B90A8'
                    style={styles.Input}
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    placeholder="860-919-7466"
                    returnKeyType="next"
                    placeholderColor='#8B90A8'
                    style={styles.Input}
                    value={phone.value}
                    onChangeText={(text) => setPhone({ value: text, error: '' })}
                    error={!!phone.error}
                    errorText={phone.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
            </View>
            <View style={styles.inputcontainer}>
            <Text style={styles.label}>Passsword</Text>
            <TextInput
                placeholder="Password"
                placeholderColor='#8B90A8'
                returnKeyType="done"
                style={styles.Input}
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            </View>
        </View>
        <View style={{flex:.2,justifyContent:'center'}}>
            <TouchableOpacity style={styles.discardbtn} onPress={onSignUpPressed}>
                <Text style={{color:Colors['dark'].text}}>Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbtn} onPress={onSignUpPressed}>
                <Text style={{color:Colors['dark'].text}}>Update</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
    padding: 20,
    width: '100%',
    backgroundColor: Colors['dark'].background,
  },
  loginbtn:{
    width:'100%',
    paddingVertical:15,
    backgroundColor:'#804694',
    alignItems: 'center',
    borderRadius:5,
  },
  discardbtn:{
    width:'100%',
    paddingVertical:15,
    marginVertical: 10,
    backgroundColor:'#322A3D',
    alignItems: 'center',
    borderRadius:5,
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
    width: wp('55%'),
    height: hp('25%'),
    marginBottom: 8,
  },
})