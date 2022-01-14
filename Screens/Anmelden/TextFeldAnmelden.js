import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Components/Button';
import { COLORS } from '../../Styles/Colors';

const TextfeldAnmelden = () => {
    const [text, onChangeText] = React.useState("Text");
    return (
          <View style={{ marginVertical: 50 }}>
              <TextInput style = {styles.input} placeholder="E-Mail Adresse"/>
              <TextInput style = {styles.input} placeholder="Passwort"/>
          </View>
    ) 
  }

  const styles = StyleSheet.create({
      input:{
          height: 50,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 2,
          padding: 10,
          borderColor: COLORS.blackColor,
          borderRadius: 10
      },
  });
  export default TextfeldAnmelden;