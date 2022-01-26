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
  mutation loginUser($email: String!, $password: String!) {
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

export const REGISTER =gql`
  mutation registerUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {
    registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {
      email,
      firstName,
      id,
      lastName,
      role
    }
  }
`