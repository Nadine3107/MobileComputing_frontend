import React from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextfeldRegistrieren from './TextfeldRegistrieren';
import Button from '../../Components/Button';


const Registrieren = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 10 }]}>
        <View style={{ marginBottom: 10, marginTop:10}}>
          <TextfeldRegistrieren/>
          <View style={{marginTop: 10}}>
            <Button title={'2G-Nachweis'}/>
          </View>
          <View style={{marginTop: 20}}>
            <Button title={'Registrieren'} type={'primary'}/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
export default Registrieren;