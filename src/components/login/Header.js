import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Welcome back</Text>
    </View>
  )
};

const styles =  StyleSheet.create({
  wrapper: {
    marginTop: 70
  },
  text: {
    fontSize: 28,
    color: '#5603AD',
    fontFamily: 'poppins-bold'
  }
})

export default Header;
