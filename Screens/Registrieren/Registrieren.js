import React from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextfeldRegistrieren from './TextfeldRegistrieren';
import Button from '../../Components/Button';


const Registrieren = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 10 }]}>
        <View style={{ marginBottom: 10 }}>
          <TextfeldRegistrieren/>
          <Button title={'2G-Nachweis'}/>
          <Button title={'Registrieren'} type={'primary'}/>
        </View>
      </ScrollView>
    </>
  )
}
export default Registrieren;