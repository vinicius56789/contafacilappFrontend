import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../../pages/home';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import BoxSx from '../initial';
import { Text } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { propsNavigationStack, propsStack } from '../../../routes/stack/Models';

const {Navigator, Screen} = createBottomTabNavigator<propsNavigationStack>();

export function BottomTab(){
    const navigation = useNavigation<propsStack>();
    
    return (
            <Navigator 
                initialRouteName="Inicial"
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#1554F6',
                    },
                    headerShown: false
                }}
            >
                <Screen
                    name="Voltar"
                    component={BoxSx}
                    options={{
                        tabBarIcon: () => {
                            return <Entypo name="back-in-time" size={25} color='#C5C0C0'/>
                        }
                    }}/>

                <Screen 
                    name="Inicial"
                    component={BoxSx}
                     
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="location-sharp" size={25} color='#C5C0C0'/>
                        },
                    }}/>
                    
                <Screen 
                    name="settings"
                    component={Home} 
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="ios-settings-sharp" size={25} color="#C5C0C0" />
                        },
                    }}/>
                
            </Navigator>
    )
}