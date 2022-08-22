import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import {Icon}  from 'react-native-elements'
import Colors from '../components/colors'
import SwitchToggle from "react-native-switch-toggle";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Dashboard({ navigation }) {

  const [on, setON] = React.useState(true);
 
  return (
    <View style={styles.container} >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View></View>
      <Text style={{fontSize:18,color:Colors['dark'].text}}>Dashboard</Text>
      <TouchableOpacity>
        <Icon
          name='bell'
          type='evilicon'
          size={30}
          color={Colors['dark'].text}
        />
      </TouchableOpacity>
    </View>
        <View style={{flex:.8,paddingTop:40}}>
            
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Synx</Text>
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