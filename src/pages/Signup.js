import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/signup/Header';
import FormPanel from '../components/signup/FormPanel';
import LoginNav from '../components/signup/LoginNav';
import PrivacyPolitic from '../components/signup/PrivacyPolitic';

const Signup = () => {
    return (
    <View style={styles.container}>
      <Header />
      <FormPanel />
      <PrivacyPolitic />
      <LoginNav />
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

export default Signup;
