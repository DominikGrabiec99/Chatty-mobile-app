import { gql } from "@apollo/client";

export const SEND_MESSAGE =gql`
  mutation sendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      id,
      insertedAt,
      user {
        email,
        firstName,
        id,
        lastName,
        role
      }
    }
  }
`

export const SEND_TYPING =gql`
  mutation typingUser($roomId: String!) {
    typingUser(roomId: $roomId) {
      email,
    	firstName,
    	lastName,
    	id,
    	role
    }
  }
`

export const LOGIN =gql`
  mutation typingUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token,
      user {
    	  email,
        firstName,
        id,
        lastName,
        role
  	  }
    }
  }
`