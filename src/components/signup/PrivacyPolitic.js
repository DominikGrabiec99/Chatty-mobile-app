import { StyleSheet, Text, View, Linking} from 'react-native';

const PrivacyPolitic = () => {

  const URL_PRIVACY_POLICY = 'https://thewidlarzgroup.com/privacy-policy'
  const URL_TERMS = 'https://thewidlarzgroup.com/'
  
  const loadInBrowserPolicy = () => {
    Linking.openURL(URL_PRIVACY_POLICY).catch(err => console.error("Couldn't load page", err));
  };

  const loadInBrowserTerms = () => {
    Linking.openURL(URL_TERMS).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.wrapper}>
        <Text style={styles.text}>By signing up you agree with</Text>
        <View style={styles.box}>
          <Text onPress={loadInBrowserTerms} style={styles.textNav}>Terms and Conditions</Text>
          <Text style={styles.text}> and </Text>
          <Text onPress={loadInBrowserPolicy} style={styles.textNav}>Privacy Policy</Text>
        </View>
    </View>
  )
};

const styles =  StyleSheet.create({
  wrapper: {
    marginTop: 10
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center'
  }, 
  textNav: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 12,
    color: '#259DFA',
    textDecorationLine: 'underline'
  }
})

export default PrivacyPolitic;
