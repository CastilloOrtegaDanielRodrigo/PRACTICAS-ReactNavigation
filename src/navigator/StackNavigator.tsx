import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Notifications } from '../screens/Notifications';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
  screenOptions={{
    headerStyle: {
      elevation: 0
    },
    cardStyle:{
      backgroundColor: 'white'
    }
  }}
    >
      <Stack.Screen name="Home" /* options={{title:"página"}}*/ component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}