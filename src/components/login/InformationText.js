import { StyleSheet, Text, View } from 'react-native';

const InformationText = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Log in and stay in toutch </Text>
      <Text style={styles.text}>with everyone!</Text>
    </View>
  )
};

const styles =  StyleSheet.create({
  wrapper: {
    marginTop: 15
  },
  text: {
    fontSize: 22,
    lineHeight: 32,
    color: '#FFFFFF',
    fontFamily: 'poppins-bold'
  }
})

export default InformationText;
