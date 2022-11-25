import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false  // Oculta la hamburguesa
   }}
    >
      <Drawer.Screen name="Tienda" component={Tabs} />
      <Drawer.Screen name="Quienes Somos" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
