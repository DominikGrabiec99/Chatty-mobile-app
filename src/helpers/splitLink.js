import { split, HttpLink } from '@apollo/client';

import * as AbsintheSocket from "@absinthe/socket";
import { Socket as PhoenixSocket } from "phoenix";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { hasSubscription } from "@jumpn/utils-graphql";
import { setContext } from '@apollo/client/link/context';

import * as SecureStore from 'expo-secure-store';

const httpLink = new HttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql'
});

const authLink = setContext(async (_, { headers }) => {
  let token = await SecureStore.getItemAsync('secure_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket("wss://chat.thewidlarzgroup.com/socket", {
  params: async () => {
    let token = await SecureStore.getItemAsync('secure_token')
    return { token};
  }
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);


export default link