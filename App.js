import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/tabnavigator';
import Pinnwand from './Screens/Pinnwand/Pinnwand';
import Home from './Screens/Home/Home';
import Impressum from './Screens/Impressum/Impressum';
import Profile from './Screens/Profile/Profile';
import BeitragErstellen from './Screens/BeitragErstellen/BeitragErstellen';

export default function App() {
  return (
  <TabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
