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