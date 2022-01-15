import React from 'react';
import {View} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import Button from '../../Components/Button';
import TextfeldAnmelden from './TextFeldAnmelden';

// Anmeldeseite mit Textfeldern E-mail Adresse, Passwort und Button zum anmelden
const Anmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 10 }]}>
        <View style={{ marginBottom: 10, marginTop:10 }}>
          <TextfeldAnmelden/>
          <View style={{marginTop: 20}}>
            <Button title={'Anmelden'} type={'primary'}/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Anmelden;