import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Textfeld = () => {
    const [text, onChangeText] = React.useState("Text");
    return (
          <SafeAreaView>
              <TextInput
                  style = {styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Schreibe einen Beitrag..."
                  />
          </SafeAreaView>
    ) 
  }

  const styles = StyleSheet.create({
      input:{
          height: 80,
          margin: 30,
          borderWidth: 2,
          padding: 10,
      },
  });
  export default Textfeld;