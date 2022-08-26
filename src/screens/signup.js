import React, { useState } from 'react'
import { TouchableOpacity,ActivityIndicator, StyleSheet, View,Text,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { Checkbox } from 'react-native-paper';
import {AlertMessage} from '../components/alert'
import URL from '../components/url'
import axios from 'axios'
import Colors from '../components/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Signup({ navigation }) {
  // const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [checked, setChecked] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const onSignUpPressed = () => {
    // const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError ) {
      // setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    else{
      if(loader){
        return;
      }
      else{
        setLoader(true)
        console.log('aaa',email.value)
        console.log('aaa',password.value)
        axios.post(URL+'auth/signup', {
        "email": email.value,
        // "name": name,
        "password": password.value
      })
        .then(function (response) {
          setLoader(false)
          if(response.data.status_type=='success'){
            navigation.navigate('Login')
          }
          else{
            AlertMessage('Error',response.data.message,'red')
          }
        })
        .catch(function (error) {
          AlertMessage('Error',error.message,'red')
          setLoader(false)
        });}
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
    <ScrollView>
      <BackButton goBack={navigation.goBack} />
        <View style={{flex:.25,alignItems: 'center'}}>
            <Image source={require('../assets/headerimage.png')} style={styles.image} />
        </View>
        <View style={{flex:.75,alignSelf: 'center',alignItems: 'center',width:'100%'}}>
            <Text style={{color:Colors['dark'].text,marginVertical:20,fontSize:hp('3%')}}>Create new Account</Text>
        {/* <View style={styles.inputcontainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                placeholder="Name"
                returnKeyType="next"
                placeholderColor='#8B90A8'
                style={styles.Input}
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                autoCapitalize="none"
                autoCompleteType="email"
            />
            <Text style={{color:'red'}}>{name.error}</Text>
        </View> */}
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
            <Text style={{color:'red'}}>{email.error}</Text>
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
        <Text style={{color:'red'}}>{password.error}</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color='#696a80'
                    uncheckedColor='#696a80'
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={{fontSize:hp('1.5%'),color:'#673778'}}>Remember me?</Text>
            </View>
            {/* <TouchableOpacity>
                <Text style={{fontSize:hp('1.5%'),color:'#673778',textDecorationLine: 'underline'}}>Forgot Password?</Text>
            </TouchableOpacity> */}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#4B3656'}} />
            <View>
                <Text style={{width: hp('3%'), textAlign: 'center',color:Colors['dark'].text}}>Or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#4B3656'}} />
        </View>
        <Text style={{marginVertical:10,color:Colors['dark'].text}}>Signup with</Text>
      <TouchableOpacity style={styles.loginbtn} onPress={onSignUpPressed}>
        {loader?<ActivityIndicator size="small" color="white" />:
          <Text style={{color:Colors['dark'].text}}>SignUp</Text>}
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={{color:Colors['dark'].text,marginVertical:5}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize:hp('1.5%'),color:'#673778',textDecorationLine: 'underline'}}>Login in</Text>
        </TouchableOpacity>
      </View>
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