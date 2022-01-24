import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rooms from "./src/pages/Rooms";
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Chat from './src/pages/Chat';

const Stack = createNativeStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });

  if (fontsLoaded) {
    return (
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
    );
  }
  return <AppLoading />;
}

export default App;
