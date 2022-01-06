import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import { HomeStackNav, SearchStackNav, ImpressumStackNav } from './stackNavigator';

// screens
import ProfileScreen from '../Screens/Profile/Profile';
import ImpressumScreen from '../Screens/Impressum/Impressum';

import { COLORS } from '../Styles/Colors';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import Cards from '../Screens/Cards/Cards';
import Impressum from '../Screens/Impressum/Impressum';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                activeColor={COLORS.primaryColor}
                inactiveColor="#95a5a6"
                barStyle={{ backgroundColor: COLORS.bgColor }}
            >
                <Tab.Screen
                    name="Home"
                    children={() => (
                       <Home/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='home' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    children={() => (
                       <Profile/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='account' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Cards"
                    children={() => (
                       <Cards/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='cards' color={color} size={26} />
                        )
                    }}
                />
                 <Tab.Screen
                    name="Impressum"
                    children={() => (
                       <Impressum/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='file-document' color={color} size={26} />
                        )
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator;