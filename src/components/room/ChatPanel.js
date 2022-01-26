import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useMutation, useSubscription} from '@apollo/client';

import { SEND_MESSAGE, SEND_TYPING } from '../../GraphQL/Mutations';
import { TYPING_USER } from '../../GraphQL/Subscription';

import renderInputToolbar from './renderInputToolbar';
import renderBubble from './renderBubble';
import renderSend from './renderSend';
import renderTime from './renderTime';
import renderDay from './renderDay';

const ChatPanel = ({ allMessages, id, user }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE)
  const [sendTyping, { error: typingError }] = useMutation(SEND_TYPING)

  const {  data: dataSub, loading: loadingSub, error: errorSub } = useSubscription(TYPING_USER, {
    variables: { roomId: id }
  });

  useEffect(() => {
    if(!dataSub) {
      setIsTyping(false)
    }
    setIsTyping( true)
  },[dataSub, loadingSub, errorSub])

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

  const handleOnFocus= () => {
    setIsFocus(true)
    sendTyping({
      variables: {
        roomId: id
      }
    })
  }

  const handleOnBlur = () => {
    setIsFocus(false)
  }
 
  return (
    <GiftedChat
      textInputProps={{onFocus: handleOnFocus, onBlur: handleOnBlur}}
      messages={messages}
      onSend={messages => onSend(messages)}
      renderInputToolbar={(props) => renderInputToolbar(props, isFocus)}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      minInputToolbarHeight={74}
      renderDay={renderDay}
      renderTime={renderTime}
      isTyping={isTyping}
      user={{
        _id: user.id,
        name: `${user.firstName} ${user.lastName}`
      }}
    />
  )
};

export default ChatPanel;
