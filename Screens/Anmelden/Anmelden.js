import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Anmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
         <Text>Anmelden</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Anmelden;