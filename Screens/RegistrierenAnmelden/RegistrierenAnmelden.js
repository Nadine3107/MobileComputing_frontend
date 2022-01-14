import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../Styles/Colors';

const RegistrierenAnmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 300}}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Anmelden</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrieren</Text>
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

export default RegistrierenAnmelden;