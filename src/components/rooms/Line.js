import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.lineBox}>
    <View style={styles.line}></View>
  </View>;
};

const styles = StyleSheet.create({
  lineBox: {
    // position: 'absolute',
    bottom: 5,
    alignItems: 'center'
  },
  line: {
    backgroundColor: '#1A1A1A',
    width: '40%',
    height: 4
  }
})

export default Line;
