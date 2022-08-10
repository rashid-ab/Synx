import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import Colors from './colors'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor="#80839A"
        underlineColor="transparent"
        mode="outlined"
        {...props}
        theme={{
         colors: {
                    placeholder: '#80839A', text: 'white',
            }
      }}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: Colors['dark'].inputBackground,
    marginRadius:20
  },
  description: {
    fontSize: 13,
    color: Colors['dark'].background,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: Colors['dark'].background,
    paddingTop: 8,
  },
})
