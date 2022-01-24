import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { useQuery} from '@apollo/client';
import { GET_ROOMS } from '../../GraphQL/Queries';

import Room from './Room';
import Loader from '../Loader';

const RoomsContainer = () => {

  const [userRooms, setUserRooms] = useState([])

  const {loading, error, data} = useQuery(GET_ROOMS)

  useEffect(() => {
    if(data) setUserRooms(data.usersRooms.rooms)
  }, [data])


  if(error){
    return(
      <View>wystąpił błąd</View>
    )
  }
  
  if(loading) {
    return <Loader />
  }

  if(userRooms.length === 0 && !loading) {
    return(
      <View>
        <Text>nie ma</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {userRooms.map(({id}) => <Room key={id} id={id}/>)}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  }
})

export default RoomsContainer;
