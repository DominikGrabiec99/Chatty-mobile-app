import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider,} from "@apollo/client";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SecureStore from 'expo-secure-store';

import link from './src/helpers/splitLink';

import * as ROUTS from './src/constans/routs'

import Rooms from "./src/pages/Rooms";
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Chat from './src/pages/Chat';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const App = () =>  {
  const [isToken, setIsToken] = useState(null)

  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppies-midium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppies-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf')
  });

  useEffect(async () => {
    const token = await SecureStore.getItemAsync('secure_token').then((data) => {
      setIsToken(data)
    })
   }, [])

  if (fontsLoaded) {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {isToken ? (
              <>
                <Stack.Screen name={ROUTS.ROOMS} component={Rooms} />
                <Stack.Screen name={ROUTS.LOGIN} component={Login} />
              </>
            ) : (
              <>
               <Stack.Screen name={ROUTS.LOGIN} component={Login} />
                <Stack.Screen name={ROUTS.ROOMS} component={Rooms} />
              </>
            )}
            <Stack.Screen name={ROUTS.REGISTRATION} component={Signup} />
            <Stack.Screen name={ROUTS.CHAT} component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
  return <AppLoading />;
}

export default App;
