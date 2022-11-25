
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab4Screen } from '../screens/Tab4Screen';
import Icon from 'react-native-vector-icons/Ionicons';

import { Platform, Text } from 'react-native'
import { TopTab } from './TopTab';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();


function TabsAndroid() {
    return (

        <BottomTabAndroid.Navigator

            barStyle={{ backgroundColor: '#404040' }}

            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({

                tabBarIcon: (props) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'home-outline' //INTEGRAMOS EL NOMBRE DEL ICONO QUE QUEREMOS EN EL TAB INFERIOR//
                            break;

                        case 'Tab2Screen':
                            iconName = 'heart-outline' //INTEGRAMOS EL NOMBRE DEL ICONO QUE QUEREMOS EN EL TAB INFERIOR//
                            break;

                        case 'Tab3Screen':
                            iconName = 'cart-outline'//INTEGRAMOS EL NOMBRE DEL ICONO QUE QUEREMOS EN EL TAB INFERIOR//
                            break;
                    }

                    return <Icon name={iconName} size={20} color="#fff" />;
                }
            })
            }
//AQUI ESTA LOS BOTONES DEL TAB INFERIOR//
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Home" }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Favoritos" }} component={Tab2Screen} />
            <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: "Carrito" }} component={Tab3Screen} />
        </BottomTabAndroid.Navigator>
    );
}
//modificacion para IOS
const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: (props) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'Tab3Screen':
                            iconName = 'T3'
                            break;

                        case 'Tab4Screen':
                            iconName = 'T4'
                            break;
                    }
                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }
            })
            }
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Home" }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: "Favoritos" }} component={Tab2Screen} />
            <BottomTabIOS.Screen name="Tab3Screen" options={{ title: "Carrito" }} component={Tab3Screen} />

        </BottomTabIOS.Navigator>
    );
}


