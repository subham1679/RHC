/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/signup';
import Login from './components/login';
import Portal from './components/portal';
import Appointment from './components/appointment';
import UpdateSchedule from './components/updateschedule';
import Emergency from './components/emergency';

const Stack = createStackNavigator();

 export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>

      <Stack.Screen name="Signup" component={Signup} />

      <Stack.Screen name="Portal" component={Portal} />

      <Stack.Screen name="Appointment" component={Appointment} />

      <Stack.Screen name="Emergency" component={Emergency} />

      <Stack.Screen name="UpdateSchedule" component={UpdateSchedule} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}



