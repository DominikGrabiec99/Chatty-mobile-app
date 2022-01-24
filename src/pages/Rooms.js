import React from 'react';
import { View, StyleSheet } from 'react-native';

import RoomsContainer from '../components/rooms/RoomsContainer';
import Header from '../components/rooms/Header';

const Rooms = () => {
  return (
    <View style={styles.container}>
      <Header />
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