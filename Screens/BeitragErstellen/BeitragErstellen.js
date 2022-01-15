import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import globalStyle from '../../Styles/GlobalStyles';
import Textfeld from './Textfeld';
import KategorieAuswahl from './KategorieAuswahl';
import { COLORS } from '../../Styles/Colors';
import Button from '../../Components/Button';

// Seite um einen Beitrag zu erstellen (Hilfe anbieten oder Hilfe suchen)
// Auswahl einer Kategorie für die Hilfe gesucht oder Hilfe angeboten wird
// Schreiben eines Beitrags im Textfeld
// Absenden des Beitrags über den Button
const BeitragErstellen = () => {
    return (
        <>
        <ScrollView style={globalStyle.container}>
          <View style={{marginVertical:50}}>
            <KategorieAuswahl/>
          </View>
         <View>
          <Textfeld/>
         </View>
         <View style={{marginTop:20}}>
         <Button title={'absenden'} type={'primary'}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>absenden</Text>
          </TouchableOpacity>
         </View>
         </ScrollView>
          </>
  )
}

// Design für den Button "absenden"
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