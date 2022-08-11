import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
// import Icon  from 'react-native-vector-icons'
import {Icon}  from 'react-native-elements'
import Colors from './colors'
export default function BackButton({ goBack,title }) {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={goBack} style={styles.container}>
        <Icon
          name='arrowleft'
          type='antdesign'
          color={Colors['dark'].text}
        />
      </TouchableOpacity>
      <Text style={{fontSize:18,color:Colors['dark'].text}}>{title}</Text>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   top: 10 ,
  //   left: 4,
  // },
  // image: {
  //   width: 24,
  //   height: 24,
  // },
})
