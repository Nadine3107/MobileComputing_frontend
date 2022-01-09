import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textfeld from '../../Components/Textfeld';
import globalStyle from '../../Styles/GlobalStyles';
import KategorieFilter from '../Pinnwand/KategorieFilter';


const BeitragErstellen = () => {
    return (
        <>
        <ScrollView style={globalStyle.container}>
        <KategorieFilter />
         <View style={{ marginVertical: 20 }}>
         <Textfeld/>
         </View>
         </ScrollView>
          </>
  )
}

export default BeitragErstellen;