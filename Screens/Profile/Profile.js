import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
//import globalStyle from '../../styles/globalStyles';

const Profile = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
          <Text>Profile Seite</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Profile;