import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


import { FontAwesome5 } from '@expo/vector-icons'

import Home from './src/screens/Home'
import Login from './src/screens/Login'

const Stack = createStackNavigator()

function  App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          initialRouteName: "Login",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00F'
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component = {Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component = {Home}
        />       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})

export default App