import React from 'react'
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> { };

export const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Hola desde Profile</Text>

      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
      <Button
        title='Nosotros'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

