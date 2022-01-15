import React from 'react';
import {View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button';

const Home = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 20 }}>
          <Button title={'Hilfe suchen'} type={'needHelp'} link={'BeitragErstellen'}/>
          <Button title={'Hilfe anbieten'} type={'offerHelp'} link={'BeitragErstellen'}/>
          <Button title={'Pinnwand'} type={'primary'} link={'Pinnwand'}/>
      </View>
      </ScrollView>
    </>
  )
}

export default Home;