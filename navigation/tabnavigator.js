import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { PinnwandStackNav, HomeStackNav, ImpressumStackNav, ProfileStackNav } from './stacknavigator';
import { COLORS } from '../Styles/Colors';

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
                       <HomeStackNav/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='home' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profil"
                    children={() => (
                       <ProfileStackNav/> 
                    )}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='account' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Pinnwand"
                    children={() => (
                       <PinnwandStackNav/> 
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
                       <ImpressumStackNav/> 
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