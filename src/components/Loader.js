import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" color="#5603AD" />
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
});

export default Loader;
