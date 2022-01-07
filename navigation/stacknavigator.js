import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";

// styles
import { COLORS } from '../styles/colors';

// screens
import Home from "../Screens/Home/Home";
import Cards from "../Screens/Cards/Cards";
import Impressum from "../Screens/Impressum/Impressum";
import Profile from "../Screens/Profile/Profile";

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

const CardsStack = createStackNavigator();
const CardsStackNav = ({ navigation }) => (
    <CardsStack.Navigator screenOptions={navHeaderStyle}>
        <CardsStack.Screen
            name="Karten"
            component={Cards}
        />
    </CardsStack.Navigator>
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
    CardsStackNav,
    ImpressumStackNav,
    ProfileStackNav
};
