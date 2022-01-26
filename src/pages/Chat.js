import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useQuery, useSubscription} from '@apollo/client';
import { GET_ROOMS_BY_ID } from '../GraphQL/Queries';
import { MESSAGE_ADDED } from '../GraphQL/Subscription';

import Header from '../components/room/Header';
import ChatPanel from '../components/room/ChatPanel';
import Line from '../components/room/Line'
import Loader from '../components/Loader'

const Chat = ({ route }) => {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState(null)
  const [isFocus, setIsFocus] = useState(false);

  const { id } = route.params;

  const {  data: dataSub, loading: loadingSub, error: errorSub } = useSubscription(MESSAGE_ADDED, {
    variables: { roomId: id }
  });

  const {loading, error, data, refetch} = useQuery(GET_ROOMS_BY_ID, {
    variables:{id},
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if(!dataSub) return
    setMessages( prev => [dataSub.messageAdded, ...prev ] )
  },[dataSub, errorSub, loadingSub])

  useEffect(() => {
    if(data) {
      setMessages([...data.room.messages])
    }
  }, [data])

  useEffect(() => { 
    refetch()
  }, [])

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

    if(loading) {
      return <Loader />
    }

  if(!data) {
    return <View></View>
  }

  return (
    <View style={styles.container}>
      <Header userName={userName}/>
      <ChatPanel allMessages={messages} id={id} user={data.room.user} isFocus={isFocus} setIsFocus={setIsFocus}/>
      {!isFocus && <Line /> }
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
