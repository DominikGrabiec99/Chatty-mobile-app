import { gql } from "@apollo/client";
// import { useMutation, useSubscription } from '@apollo/client';
// import { View, Text } from "react-native";

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

// export const MessagesFunction = (id) => {
//   const { data, loading } = useSubscription(
//     MESSAGE_ADDED,
//     { variables: { roomId: id }, 
//       onSubscriptionData: (data) => {
//         const message = data.subscriptionData.data.messageCreated
//         console.log('Message recive', message)
//       }
//     }
//   )

//   return <View>
//     <Text>ssss</Text>
//   </View>
// }