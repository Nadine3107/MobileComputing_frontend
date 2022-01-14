import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../Styles/Colors';
import TextfeldAnmelden from './TextFeldAnmelden';

const Anmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
        <TextfeldAnmelden/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Anmelden</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: COLORS.primaryColor
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: 'bold'
  }
})

export default Anmelden;