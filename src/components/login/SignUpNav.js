import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as ROUTS from '../../constans/routs'

const SignUpNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <Text style={styles.text}>Don't have any account?</Text>
        <Text onPress={() => navigation.navigate(ROUTS.REGISTRATION)} style={styles.textNav}>  Sign up</Text>
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

export default SignUpNav;
