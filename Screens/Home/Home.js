import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button';
import ButtonHilfeAnbieten from '../../Components/ButtonHilfeAnbieten';
import ButtonHilfeSuchen from '../../Components/ButtonHilfeSuchen';

// styles
//import globalStyle from '../../styles/globalStyles';

const Home = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 20 }}>
          <ButtonHilfeSuchen title={'Hilfe suchen'}/>
          <ButtonHilfeAnbieten title={'Hilfe anbieten'} />
          <Button title={'Pinnwand'} />
      </View>
      </ScrollView>
    </>
  )
}

export default Home;