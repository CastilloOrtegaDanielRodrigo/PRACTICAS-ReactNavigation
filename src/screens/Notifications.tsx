import { useNavigation } from "@react-navigation/core"
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const Notifications = () => {

  const navigator = useNavigation();
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Hola desde Notifications</Text>

      <Button
        title="Ir a Profile"
        onPress={() => navigator.navigate('Profile' as never)}

      />
    </View>
  )
}
