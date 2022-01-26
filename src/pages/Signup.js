import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/signup/Header';
import FormPanel from '../components/signup/FormPanel';

const Signup = () => {
    return (
    <View style={styles.container}>
      <Header />
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

export default Signup;
