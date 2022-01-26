import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { useQuery} from '@apollo/client';
import { GET_ROOMS } from '../../GraphQL/Queries';

import Room from './Room';
import Loader from '../Loader';

const RoomsContainer = () => {
  const [userRooms, setUserRooms] = useState([])

  const {loading, error, data, refetch} = useQuery(GET_ROOMS, 
    {
      fetchPolicy: 'no-cache'
  })

  useEffect(() => { 
    refetch()
  }, [])

  useEffect(() => {
    if(data) setUserRooms(data.usersRooms.rooms)
  }, [data])


  if(error){
    return(
      <View style={styles.infoMessage}>
        <Text style={styles.textInfoMessage}>
          An error has occurred with the database
        </Text>
      </View>
    )
  }
  
  if(loading) {
    return <Loader />
  }

  if(!data && userRooms.length === 0 && !loading) {
    return(
      <View style={styles.infoMessage}>
        <Text style={styles.textInfoMessage}>
          You don't have any room yet
        </Text>
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
  },
  infoMessage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfoMessage: {
    fontSize: 22,
    color: '#5603AD',
    fontFamily: 'poppins-regular'
  }
})

export default RoomsContainer;
