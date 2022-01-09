import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/GlobalStyles';
import { TYPO } from '../../Styles/Typo';

// components
import KategorieFilter from './KategorieFilter';
import ErgebnisEintrag from './ErgebnisEintrag';
import TypFilter from './TypFilter';

const Pinnwand = () => {
  return (
    <>
        <ScrollView style={globalStyle.container}>
            <TypFilter/>
            <KategorieFilter />
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={TYPO.sub_title}>Ergebnisse</Text>
            </View>
            <ErgebnisEintrag />
        </ScrollView>
    </>
)
}

export default Pinnwand;