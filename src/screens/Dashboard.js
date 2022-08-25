import React, { useState,useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View,Text,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import {Icon,LinearProgress}  from 'react-native-elements'
import Colors from '../components/colors'
import SwitchToggle from "react-native-switch-toggle";
import Vitals from 'react-native-vitals';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Dashboard({ navigation }) {

  useEffect(() => {
    Vitals.getMemory().then(memory => {
      var {
        appUsed,
        systemTotal,
        systemFree,
        systemUsed
      } = memory;
    });
    
    Vitals.getStorage().then(storage => {
      var {
        total,
        free,
        used
      } = storage;
    });
    
    Vitals.addLowMemoryListener(memory => {
      console.log('Low memory warning triggered');
      var {
        appUsed,
        systemTotal,
        systemFree,
        systemUsed
      } = memory;
    })
    console.log('Vitals',Vitals)
  });
 
  return (
    <ScrollView style={styles.container} >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View></View>
      <Text style={{fontSize:18,color:Colors['dark'].text,fontWeight:'bold'}}>Dashboard</Text>
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
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{backgroundColor:'#322A3D',flex:.5,height:hp('20'),padding:10,borderRadius:10}}>
                  <View style={{backgroundColor:'black',width:wp('12'),height:hp('6'),alignItems:'center',justifyContent:'center',borderRadius:50}}>
                    <Image source={require('../assets/Capture.png')}/>
                  </View>
                  <Text style={{fontWeight:'bold',fontSize:hp('2.2'),marginTop:20,color:Colors['dark'].text}}>Synx Vault 1</Text>
                  <View style={{ marginTop:10}}>
                    <LinearProgress value={0.1} 
                      variant='determinate'
                      color='#824597'
                      trackColor='#4B3656'
                      style={{
                          borderRadius: 5, 
                          height: 3,
                          // marginBottom: 20,
                      }}
                    />
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:hp('1.5'),color:Colors['dark'].text}}>1138 Files</Text>
                    <Text style={{fontSize:hp('1.5'),color:'#7E7A86'}}>50GB</Text>
                  </View>
              </View>
              <View style={{backgroundColor:'#322A3D',flex:.5,height:hp('20'),padding:10,marginLeft:10,borderRadius:10}}>
                  <View style={{backgroundColor:'black',width:wp('12'),height:hp('6'),alignItems:'center',justifyContent:'center',borderRadius:50}}>
                    <Image source={require('../assets/Capture.png')} />
                  </View>
                  <Text style={{fontWeight:'bold',fontSize:hp('2.2'),marginTop:20,color:Colors['dark'].text}}>Synx Vault 2</Text>
                  <View style={{ marginTop:10}}>
                    <LinearProgress color="primary" value={0.1} 
                      variant='determinate'
                      color='#824597'
                      trackColor='#4B3656'
                      style={{
                          borderRadius: 5, 
                          height: 3,
                      }}
                    />
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:hp('1.5'),color:Colors['dark'].text}}>1138 Files</Text>
                    <Text style={{fontSize:hp('1.5'),color:'#7E7A86'}}>50GB</Text>
                  </View>
              </View>
            </View>
            <Text style={{fontSize:hp('2.5'),fontWeight:'bold',marginVertical:10,color:Colors['dark'].text}}>Recent Files</Text>
            <View style={{backgroundColor:'#322A3D',height:hp('40'),color:Colors['dark'].text,padding:10,borderRadius:10}}>
                <View style={{flexDirection:'row',flex:1}}>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5,marginLeft:10}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5,marginLeft:10}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5,marginLeft:10}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                      <View style={{flexDirection:'row',backgroundColor:'#190B20',height:hp('8'),alignItems:'center',justifyContent:'center',flex:.5,borderRadius:5}}>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.7,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',flex:.4}}>
                              <Image style={{height:hp('4'),width:wp('7')}} source={require('../assets/file.png')} />
                            </View>
                            <View style={{flex:.6}}>
                              <Text style={{fontSize:hp('1.5'),fontWeight:'bold',color:Colors['dark'].text}}>Sounds File</Text>
                              <Text style={{fontSize:hp('1.3'),alignSelf:'center'}}>01-06-22</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row',backgroundColor:'#190B20',flex:.3,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:hp('1.4'),color:Colors['dark'].text}}>90MB</Text>
                          </View>
                      </View>
                      
                </View>
            </View>
            <Text style={{fontSize:hp('2.5'),fontWeight:'bold',marginVertical:10,color:Colors['dark'].text}}>Storage Details</Text>
            <View style={{backgroundColor:'#322A3D',flexDirection:'row',flex:1,height:hp('20'),padding:10,marginBottom:40,borderRadius:10}}>
                <View style={{flex:.45}}>

                </View>
                <View style={{flex:.55,justifyContent:'center'}}>
                      <View style={{flexDirection:'row',marginVertical:5}}>
                          <View style={{borderRadius:50,height:hp('1.5'),width:wp('3'),backgroundColor:'#814697',alignSelf:'center'}}></View>
                          <Text style={{fontSize:hp('1.8'),marginLeft:10,color:Colors['dark'].text}}>Document Files 1.3 GB</Text>
                      </View>
                      <View style={{flexDirection:'row',marginVertical:5,}}>
                          <View style={{borderRadius:50,height:hp('1.5'),width:wp('3'),backgroundColor:'#C75089',alignSelf:'center'}}></View>
                          <Text style={{fontSize:hp('1.8'),marginLeft:10,color:Colors['dark'].text}}>Media Files 2.3 GB</Text>
                      </View>
                      <View style={{flexDirection:'row',marginVertical:5,}}>
                          <View style={{borderRadius:50,height:hp('1.5'),width:wp('3'),backgroundColor:'#117DA9',alignSelf:'center'}}></View>
                          <Text style={{fontSize:hp('1.8'),marginLeft:10,color:Colors['dark'].text}}>Other Files 1.0 GB</Text>
                      </View>
                      <View style={{flexDirection:'row',marginVertical:5}}>
                          <View style={{borderRadius:50,height:hp('1.5'),width:wp('3'),backgroundColor:'#1B9D76',alignSelf:'center'}}></View>
                          <Text style={{fontSize:hp('1.8'),marginLeft:10,color:Colors['dark'].text}}>Unknown Files 3.3 GB</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',backgroundColor:'#824597',height:hp('8'),width:wp('17'),alignItem:'center',justifyContent:'center',borderRadius:50,bottom:-50,zIndex:1000,elevation:1000}}>
                        <Icon
                          name='upload'
                          type='feather'
                          size={25}
                          color='white'
                        />
                      </TouchableOpacity>
                </View>
                
            </View>
        </View>
    </ScrollView>
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
    fontWeight:'bold',
    fontSize:hp('2.5')
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