import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useQuery} from '@apollo/client';
import { GET_ROOMS_BY_ID } from '../../GraphQL/Queries';
import Svg, { Path, Circle, G, Mask} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Room = ({ id }) => {
  const [room, setRoom] = useState({})
  const navigation = useNavigation();

  const {loading, error, data} = useQuery(GET_ROOMS_BY_ID, {
    variables:{id}
  })

  useEffect(() => {
    if(data) {
      setRoom({name: data.room.name, time: data.room.messages[0].insertedAt, message: data.room.messages[0].body})
    }
  }, [data])

  if(!data) {
    return <View></View>
  }

  const createTime = () => {
    if(!room.time) return
    const time = new Date(room.time.slice(0,4), room.time.slice(5,7), room.time.slice(8,10), room.time.slice(11,13), room.time.slice(14,16))
    const now = new Date()

    const timeMess = (now.getTime()- time.getTime()) / (1000)

    if(timeMess < 15){
      return 'now'
    } else if(timeMess < 60) {
      return `${timeMess} s ago`
    } else if( (timeMess / 60) > 0 && (timeMess / 60) < 60) {
      const time = timeMess / 60
      return  `${time.toFixed(0)} m ago`
    } else if((timeMess / (60 * 60) ) > 0 && (timeMess / (60 * 60) < 24)){
      const time = timeMess / (60 * 60)
      return `${time.toFixed(0)} h ago`
    } else if((timeMess / (60 * 60 * 24) ) > 0 && (timeMess / (60 * 60* 24) < 30)){
      const time = timeMess / (60 * 60* 24)
      return `${time.toFixed(0)} d ago`
    } else {
      const time = timeMess / (60 * 60* 24* 30)
      return `${time.toFixed(0)} mo ago`
    }
  }

  return (
  <TouchableOpacity style={styles.wrapperRoom} onPress={() => navigation.navigate('Chat', {id: id})}>
    <View>
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
        <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <Circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
        </Mask>
        <G mask="url(#mask0)">
          <Path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" fill="#BFC1CC"/>
          <Path d="M32 32C51.33 32 67 47.67 67 67C67 86.33 51.33 102 32 102C12.67 102 -3 86.33 -3 67C-3 47.67 12.67 32 32 32Z" fill="#BFC1CC"/>
        </G>
      </Svg>
    </View>
    <View style={styles.roomInfo} >
      <Text numberOfLines={1} style={styles.name}>{room.name}</Text>
      <Text numberOfLines={1} style={styles.message}>{room.message}</Text>
    </View>
    <View style={styles.timeBox}>
      { createTime() === 'now' ? <View style={styles.messNow}></View>: <Text style={styles.time}>{createTime()}</Text>} 
    </View>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  wrapperRoom: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 10,
    fontFamily: '',
    padding: 10,
    alignItems: 'center'
  },
  roomInfo: {
    marginStart: 12,
  },
  name: {
    marginBottom: 4,
    fontWeight: '700',
    fontFamily: 'poppins-regular'
  },
  messNow: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: '#A8FF76'
  },
  timeBox: {
    position: 'absolute',
    top: 5,
    right: 20,
    color: 'grey'
  },
  time: {
    color: '#bfc1cc'
  }
})

export default Room;
