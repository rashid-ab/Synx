import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
// import Icon  from 'react-native-vector-icons'
import {Icon}  from 'react-native-elements'
import Colors from './colors'
export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Icon
        name='arrowleft'
        type='antdesign'
        color={Colors['dark'].text}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 ,
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})
