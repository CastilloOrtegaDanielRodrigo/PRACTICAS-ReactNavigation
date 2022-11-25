import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from '../screens/Chat';
import { Albums } from '../screens/Albums';
import { Contacts } from '../screens/Contacts';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

  return (
    <Tab.Navigator

    screenOptions={({route}) => ({
      tabBarPressColor: '#ffa031',
      tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: '#ffa031',
      },
      tabBarStyle: {
        //en ios es shadowColor:"transparent"
        elevation: 0,
      },
      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Chat':
            iconName = 'Ch';
            break;

          case 'Contacts':
            iconName = 'Co';
            break;

          case 'Albums':
            iconName = 'Al';
            break;
        }
        return <Text style={{color}}>{iconName}</Text>;
      },
    })}

    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
}