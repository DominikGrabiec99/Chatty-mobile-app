import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.lineBox}>
    <View style={styles.line}></View>
    <View style={styles.trans}></View>
  </View>;
};

const styles = StyleSheet.create({
  lineBox: {
    alignItems: 'center',
    backgroundColor: '#B6DEFD'
  },
  line: {
    backgroundColor: '#1A1A1A',
    width: '40%',
    height: 4
  },
  trans: {
    backgroundColor: 'transparent',
    width: '40%',
    height: 4
  }
})

export default Line;