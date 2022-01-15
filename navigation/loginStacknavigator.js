import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";

// styles
import { COLORS } from '../Styles/Colors';

// screens
import Anmelden from "../Screens/Anmelden/Anmelden";
import Registrieren from "../Screens/Registrieren/Registrieren";
import RegistrierenAnmelden from "../Screens/RegistrierenAnmelden/RegistrierenAnmelden";
import { NavigationContainer } from "@react-navigation/native";


const LoginProcessStack = createStackNavigator();
const LoginProcessStackNav = ({ navigation }) => (
    <NavigationContainer>
    <LoginProcessStack.Navigator>
        <LoginProcessStack.Screen
         name="Login"
         component={RegistrierenAnmelden}
        />
        <LoginProcessStack.Screen
            name="Anmelden"
            component={Anmelden}
        />
         <LoginProcessStack.Screen
            name="Registrieren"
            component={Registrieren}
        />
    </LoginProcessStack.Navigator>
    </NavigationContainer>
)
export {
    LoginProcessStackNav
};