import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";

// styles
import { COLORS } from '../Styles/Colors';

// screens
import Home from "../Screens/Home/Home";
import Impressum from "../Screens/Impressum/Impressum";
import Profile from "../Screens/Profile/Profile";
import Pinnwand from "../Screens/Pinnwand/Pinnwand";

const navHeaderStyle = {
    headerStyle: {
        backgroundColor: COLORS.bgColor
    },
    headerTintColor: COLORS.primaryColor,
    headerTitleStyle: {
        fontSize: 18,
        fontFamily: 'Rubik-Black',
    },
    headerTitleAlign: "center",
}

const HomeStack = createStackNavigator();
const HomeStackNav = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={navHeaderStyle}>
        <HomeStack.Screen
            name="Home"
            component={Home}
        />
    </HomeStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackNav = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={navHeaderStyle}>
        <ProfileStack.Screen
            name="Profil"
            component={Profile}
        />
    </ProfileStack.Navigator>
)

const PinnwandStack = createStackNavigator();
const PinnwandStackNav = ({ navigation }) => (
    <PinnwandStack.Navigator screenOptions={navHeaderStyle}>
        <PinnwandStack.Screen
            name="Pinnwand"
            component={Pinnwand}
        />
    </PinnwandStack.Navigator>
)

const ImpressumStack = createStackNavigator();
const ImpressumStackNav = ({ navigation }) => (
    <ImpressumStack.Navigator screenOptions={navHeaderStyle}>
        <ImpressumStack.Screen
            name="Impressum"
            component={Impressum}
        />
    </ImpressumStack.Navigator>
)

export {
    HomeStackNav,
    PinnwandStackNav,
    ImpressumStackNav,
    ProfileStackNav
};
