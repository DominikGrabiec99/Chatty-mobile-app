import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as ROUTS from '../../constans/routs'

const LoginNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <Text style={styles.text}>Arleady have an account?</Text>
        <Text onPress={() => navigation.navigate(ROUTS.LOGIN)} style={styles.textNav}>  Log in</Text>
    </View>
  )
};

const styles =  StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  }, 
  textNav: {
    backgroundColor: 'transparent',
    color: '#5603AD',
    fontSize: 14,
    fontWeight: '700'
  }
})

export default LoginNav;
