import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../styles/colors';


const Button = ({ title, onPress, ...props }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 5,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: 'bold'
  }
})

export default Button;