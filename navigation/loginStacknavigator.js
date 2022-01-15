import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import der benötigten Screens
import Anmelden from "../Screens/Anmelden/Anmelden";
import Registrieren from "../Screens/Registrieren/Registrieren";
import RegistrierenAnmelden from "../Screens/RegistrierenAnmelden/RegistrierenAnmelden";

// Navigation für Login Prozess (Anmelden und Registrieren)
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