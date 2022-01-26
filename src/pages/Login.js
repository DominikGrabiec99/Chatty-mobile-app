import { StyleSheet, View } from 'react-native';

import Header from '../components/login/Header';
import InformationText from '../components/login/InformationText';
import FormPanel from '../components/login/FormPanel';

const Login = () => {
    return (
    <View style={styles.container}>
      <Header />
      <InformationText />
      <FormPanel />
    </ View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6defd',
    padding: 15
  }
})

export default Login;
