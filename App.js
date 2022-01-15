import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/tabnavigator';
import Pinnwand from './Screens/Pinnwand/Pinnwand';
import Home from './Screens/Home/Home';
import Impressum from './Screens/Impressum/Impressum';
import Profile from './Screens/Profile/Profile';
import BeitragErstellen from './Screens/BeitragErstellen/BeitragErstellen';
import Registrieren from './Screens/Registrieren/Registrieren';
import Anmelden from './Screens/Anmelden/Anmelden';
import RegistrierenAnmelden from './Screens/RegistrierenAnmelden/RegistrierenAnmelden';
import { LoginProcessStackNav } from './navigation/loginStacknavigator';

export default function App() {
  return (
  <LoginProcessStackNav/>
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
