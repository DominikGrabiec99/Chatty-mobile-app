import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql'
});

const wsLink = new WebSocketLink({
  uri: 'wss://chat.thewidlarzgroup.com/socket',
  options: {
    reconnect: true,
    connectionParams: {
      authToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM4MDExNjcsImlhdCI6MTY0MTM4MTk2NywiaXNzIjoiY2hhdGx5IiwianRpIjoiN2MzNjFlY2UtM2ZlNC00NDU2LWJhMWUtOWQyMWQwOTI1ZjIzIiwibmJmIjoxNjQxMzgxOTY2LCJzdWIiOiIwNGJmODU1MS1lNjg3LTQ5YTUtYWZjYS0zMWViMmE1YTEyYzkiLCJ0eXAiOiJhY2Nlc3MifQ.Hvzck-vXPCfRB7G2fM9oelBXrWXhPSGw4Mo64WVZZYMxEMZwpVclrZb5qBZp75tr9LS-YjtaIsKoow7i8Pj5bA'
    },
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export default splitLink