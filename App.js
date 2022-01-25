import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import splitLink from './src/helpers/splitLink';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider,} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import Rooms from "./src/pages/Rooms";
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Chat from './src/pages/Chat';

const Stack = createNativeStackNavigator();

// const httpLink = createHttpLink({
//   uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
// });

const authLink = setContext((_, { headers }) => {
  // const token = AsyncStorage.getItem('token');
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM4MDExNjcsImlhdCI6MTY0MTM4MTk2NywiaXNzIjoiY2hhdGx5IiwianRpIjoiN2MzNjFlY2UtM2ZlNC00NDU2LWJhMWUtOWQyMWQwOTI1ZjIzIiwibmJmIjoxNjQxMzgxOTY2LCJzdWIiOiIwNGJmODU1MS1lNjg3LTQ5YTUtYWZjYS0zMWViMmE1YTEyYzkiLCJ0eXAiOiJhY2Nlc3MifQ.Hvzck-vXPCfRB7G2fM9oelBXrWXhPSGw4Mo64WVZZYMxEMZwpVclrZb5qBZp75tr9LS-YjtaIsKoow7i8Pj5bA'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache()
});

function App() {

  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    // 'sF-Compact-Display-medium':  require('./assets/fonts/sf-compact-display-medium-5864711817c30.ttf'),
    // 'sF-Compact-Display-thin':  require('./assets/fonts/sf-compact-display-thin-58646eb43a785.ttf')
  });

  if (fontsLoaded) {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Rooms" component={Rooms} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Signup} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
  return <AppLoading />;
}

export default App;
