import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useQuery} from '@apollo/client';
import { GET_ROOMS_BY_ID } from '../GraphQL/Queries';

import Header from '../components/room/Header';
import ChatPanel from '../components/room/ChatPanel';

const Chat = ({ route, navigation }) => {
  const [room, setRoom] = useState({})
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState(null)
  const { id } = route.params;

  const {loading, error, data} = useQuery(GET_ROOMS_BY_ID, {
    variables:{id}
  })

  useEffect(() => {
    if(data) {
      setRoom(data.room)
      setMessages([...data.room.messages])
    }
  }, [data])

  useEffect(() => {
    if(messages.length === 0) return
    const myName = `${data.room.user.firstName} ${data.room.user.lastName}`
    messages.some(message => {
      const name = `${message.user.firstName} ${message.user.lastName}`
      if(name !== myName) {
        setUserName(name)
        return true
      }
    })
  }, [messages])

   if(!data) {
    return <View></View>
  }
  
  return (
    <View style={styles.container}>
      <Header userName={userName}/>
      <ChatPanel allMessages={messages} id={id} user={data.room.user}/>
    </ View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  }
})

export default Chat;
