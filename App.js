import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';


import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesome5 } from '@expo/vector-icons'

import ScreenA from './src/ScreenA'
import ScreenB from './src/ScreenB'

const Drawer = createDrawerNavigator()

function  App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        // initialRouteName="Screen_B"
        // drawerPosition='right' //by default it is left
        drawerType='back' // back front permanent slide, default is front, opening the menu in front of the screen
        edgeWidth={100} // decides where you can start drawing out the menu, 100 from the left side of the screen
        hideStatusBar={true} // hide the top bar when the menu is open, by default it is not hidden
        overlayColor='#ffb6c180' // color for the main screen once you start drawing out the menu, from transparent to this color
        drawerStyle={{
          backgroundColor: '#ffe4c4',
          width: 150
        }}
        screenOptions={{
          headerShown: true, // will make a hamburger menu and show the screen title
          // swipeEnabled: false, // now can Not draw out the menu
          // gestureEnabled: false, // if touch outside of the menu, it will Not close
          swipeEnabled: true, 
          gestureEnabled: true, 
          headerTitleAlign: 'left', //default is center
          headerStyle: {
            backgroundColor: '#7fffd4'
          },
          headerTintColor: '#008b8b', // header title text and hambugare color
          headerTitleStyle: { // style for header title text
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen
          name="Screen_A"
          component = {ScreenA}
          options={{
            title:'Screen_A title', // will be shown in the menu
            drawerIcon: ({focused}) => (
              <FontAwesome5 name='autoprefixer' size={focused? 20 : 15} color={focused? '#ffb6c1':'#999'}/>
            )
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component = {ScreenB}
          initialParams={{ItemName: 'Item from Drawer', ItemId: 12}}
        />

        
      </Drawer.Navigator>
    </NavigationContainer>
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