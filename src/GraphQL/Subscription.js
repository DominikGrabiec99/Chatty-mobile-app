import { gql } from "@apollo/client";

export const MESSAGE_ADDED = gql`
   subscription messageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body,
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

export const TYPING_USER = gql`
   subscription messageAdded($roomId: String!) {
    typingUser(roomId: $roomId) {
      email,
      firstName,
      id,
      lastName,
      role
    }
  }
`