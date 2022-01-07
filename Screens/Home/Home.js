import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button';


// styles
//import globalStyle from '../../styles/globalStyles';

const Home = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 20 }}>
          <Button title={'Hilfe suchen'} />
          <Button title={'Hilfe anbieten'} />
          <Button title={'Pinnwand'} />
      </View>
      </ScrollView>
    </>
  )
}

export default Home;