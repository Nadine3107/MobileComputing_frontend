import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../Components/Button';
import { COLORS } from '../../Styles/Colors';

const RegistrierenAnmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 300}}>
          <Button title={'Anmelden'} type={'primary'}link={'Anmelden'}/>
          <Button title={'Registrieren'} type={'primary'}link={'Registrieren'}/>
        </View>
      </ScrollView>
    </>
  )
}

export default RegistrierenAnmelden;