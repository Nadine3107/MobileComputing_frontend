import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextfeldRegistrieren from './TextfeldRegistrieren';

const Registrieren = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
         <TextfeldRegistrieren/>
        </View>
      </ScrollView>
    </>
  )
}

export default Registrieren;