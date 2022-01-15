import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';
import { COLORS } from '../Styles/Colors';

const Button = ({ title, onPress, type, link, ...props }) => {
  const navigation = useNavigation();

  const setButtonColor = () => {
    if(type == 'needHelp'){
      return COLORS.needHelpColor
    }else if(type == 'offerHelp'){
      return COLORS.offerHelpColor
    }
    else if(type == 'primary'){
      return COLORS.primaryColor
    }
    else{
      return COLORS.blackColor
    }
  }

  return (
    <Pressable style={[styles.button, {borderColor: setButtonColor()}]} onPress={() => navigation.navigate(`${link}`)} >
      <Text style={[styles.buttonText, {color: setButtonColor()}]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: 'bold'
  }
})

export default Button;