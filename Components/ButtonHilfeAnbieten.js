import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../Styles/Colors';

const ButtonHilfeAnbieten = ({ title, onPress, ...props }) => {
  return (
    <Pressable style={styles.buttonHilfeAnbieten} onPress={onPress} >
      <Text style={styles.buttonHilfeAnbietenText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonHilfeAnbieten: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 5,
    borderColor: COLORS.offerHelpColor,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonHilfeAnbietenText: {
    fontSize: 16,
    color: COLORS.offerHelpColor,
    fontWeight: 'bold'
  }
})

export default ButtonHilfeAnbieten;