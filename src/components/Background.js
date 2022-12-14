import React from 'react'
import { ImageBackground, StyleSheet,View, KeyboardAvoidingView } from 'react-native'
import Colors from './colors'

export default function Background({ children }) {
  return (
    <View
      // source={require('../assets/background_dot.png')}
      // resizeMode="repeat"
      style={styles.background}
    >
      {/* <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors['dark'].background,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    // maxWidth: 340,
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
