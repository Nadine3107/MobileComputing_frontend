import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import globalStyle from '../../Styles/GlobalStyles';
import KategorieFilter from '../Pinnwand/KategorieFilter';
import Textfeld from './Textfeld';
import { COLORS } from '../../Styles/Colors';


const BeitragErstellen = () => {
    return (
        <>
        <ScrollView style={globalStyle.container}>
          <View style={{marginVertical:50}}>
            <KategorieFilter />
          </View>
         <View>
          <Textfeld/>
         </View>
         <View style={{marginVertical:20}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>absenden</Text>
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

export default BeitragErstellen;