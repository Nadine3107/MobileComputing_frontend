import React from 'react';
import {View} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import Button from '../../Components/Button';
import TextfeldAnmelden from './TextFeldAnmelden';

const Anmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
        <TextfeldAnmelden/>
        <Button title={'Anmelden'} type={'primary'}/>
        </View>
      </ScrollView>
    </>
  )
}

export default Anmelden;