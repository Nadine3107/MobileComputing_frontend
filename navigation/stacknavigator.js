import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";


// styles
import { COLORS } from '../Styles/Colors';
import Home from "../Screens/Home/Home";

// screens


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



export {
    HomeStackNav,
    
};
