import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../Styles/Colors';


const ButtonHilfeSuchen = ({ title, onPress, ...props }) => {
  return (
    <Pressable style={styles.buttonHilfeSuchen} onPress={onPress} >
      <Text style={styles.buttonHilfeSuchenText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonHilfeSuchen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 5,
    borderColor: COLORS.needHelpColor,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonHilfeSuchenText: {
    fontSize: 16,
    color: COLORS.needHelpColor,
    fontWeight: 'bold'
  }
})

export default ButtonHilfeSuchen;