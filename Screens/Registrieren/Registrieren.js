import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../Styles/Colors';
import TextfeldRegistrieren from './TextfeldRegistrieren';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Registrieren = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 10 }]}>
        <View style={{ marginBottom: 10 }}>
          <TextfeldRegistrieren/>
          <TouchableOpacity style={styles.button2Gnachweis}>
            <Text style={styles.buttonText2Gnachweis}>2G-Nachweis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegistrieren}>
            <Text style={styles.buttonTextRegistrieren}>Registrieren</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  buttonRegistrieren: {
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
  buttonTextRegistrieren: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: 'bold'
  },
  button2Gnachweis:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: COLORS.blackColor
  },
  buttonText2Gnachweis: {
    fontSize: 16,
    color: COLORS.blackColor,
    fontWeight: 'bold'
  },

})

export default Registrieren;