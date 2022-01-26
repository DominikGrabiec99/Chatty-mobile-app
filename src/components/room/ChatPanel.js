import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useMutation, useSubscription } from '@apollo/client';

import { SEND_MESSAGE } from '../../GraphQL/Mutations';
import { MESSAGE_ADDED } from '../../GraphQL/Subscription';

import renderInputToolbar from './renderInputToolbar';
import renderBubble from './renderBubble';
import renderSend from './renderSend';
import renderTime from './renderTime';
import renderDay from './renderDay';

const ChatPanel = ({ allMessages, id, user }) => {
  const [messages, setMessages] = useState([]);

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE)

  useEffect(() => {
    setMessages(allMessages.map(({id, body, insertedAt, user }) => ({
      _id: id,
      text: body, 
      createdAt: insertedAt,
      user: {
        _id: user.id,
        name: `${user.firstName} ${user.lastName}`
      }
    })))

  }, [id, allMessages])

  const onSend = useCallback((messages = []) => {
    sendMessage({
      variables: {
        body: messages[0].text,
        roomId: id
      }
    })

    if(error) {
      console.log(error)
    }
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      renderInputToolbar={renderInputToolbar}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      minInputToolbarHeight={74}
      renderDay={renderDay}
      renderTime={renderTime}
      user={{
        _id: user.id,
        name: `${user.firstName} ${user.lastName}`
      }}
      
    />
  )
};

export default ChatPanel;
