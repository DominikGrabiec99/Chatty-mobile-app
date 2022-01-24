import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomsContainer from '../components/container/RoomsContainer';

import Headre from '../components/room/Headre';

const Rooms = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Headre />
      <RoomsContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  }
})

export default Rooms;