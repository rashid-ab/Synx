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
 

  return (
    <View style={styles.container} >
        <BackButton goBack={navigation.goBack} title="Sounds & Security" />
        <View style={{flex:.8,paddingTop:40}}>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>BandWidth</Text>
                <View style={styles.tabs}>
                    <Text>Warn on Mobile Network</Text>
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
                </View>
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Security</Text>
                <View style={styles.tabs}>
                    <Text>Turn Password On</Text>
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
                </View>
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Sounds</Text>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Start Task</Text>
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
                </View>
                </View>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Finish Task</Text>
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
                </View>
                </View>
                <View style={styles.soundtab}>
                <View style={styles.soundtabs}>
                    <Text>Error</Text>
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
                </View>
                </View>
                <View style={[styles.soundtab,{paddingBottom:30}]}>
                <View style={styles.soundtabs}>
                    <Text>Delete</Text>
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