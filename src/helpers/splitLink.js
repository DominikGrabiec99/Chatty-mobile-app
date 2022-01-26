import { split, HttpLink } from '@apollo/client';

import * as AbsintheSocket from "@absinthe/socket";
import { Socket as PhoenixSocket } from "phoenix";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { hasSubscription } from "@jumpn/utils-graphql";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql'
});

const authLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM4MDExNjcsImlhdCI6MTY0MTM4MTk2NywiaXNzIjoiY2hhdGx5IiwianRpIjoiN2MzNjFlY2UtM2ZlNC00NDU2LWJhMWUtOWQyMWQwOTI1ZjIzIiwibmJmIjoxNjQxMzgxOTY2LCJzdWIiOiIwNGJmODU1MS1lNjg3LTQ5YTUtYWZjYS0zMWViMmE1YTEyYzkiLCJ0eXAiOiJhY2Nlc3MifQ.Hvzck-vXPCfRB7G2fM9oelBXrWXhPSGw4Mo64WVZZYMxEMZwpVclrZb5qBZp75tr9LS-YjtaIsKoow7i8Pj5bA'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket("wss://chat.thewidlarzgroup.com/socket", {
  params: () => {
    return { token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM4MDExNjcsImlhdCI6MTY0MTM4MTk2NywiaXNzIjoiY2hhdGx5IiwianRpIjoiN2MzNjFlY2UtM2ZlNC00NDU2LWJhMWUtOWQyMWQwOTI1ZjIzIiwibmJmIjoxNjQxMzgxOTY2LCJzdWIiOiIwNGJmODU1MS1lNjg3LTQ5YTUtYWZjYS0zMWViMmE1YTEyYzkiLCJ0eXAiOiJhY2Nlc3MifQ.Hvzck-vXPCfRB7G2fM9oelBXrWXhPSGw4Mo64WVZZYMxEMZwpVclrZb5qBZp75tr9LS-YjtaIsKoow7i8Pj5bA" };
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