import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  {
    usersRooms {
      user {
        email,
        firstName,
        lastName,
        id,
        role
      }
      rooms {
        id,
        name
      }
    }
  }
`

export const GET_ROOMS_BY_ID = gql`
  query RoomsQuery($id: ID!){
    room(id: $id) {
      id,
    	messages {
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
      },
    name,
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