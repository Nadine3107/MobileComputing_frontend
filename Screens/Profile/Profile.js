import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button.js';

// styles
//import globalStyle from '../../styles/globalStyles';

const Profile = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
          <Button title={'2G-Nachweis'} />
        </View>
      </ScrollView>
    </>
  )
}

export default Profile;