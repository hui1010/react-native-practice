import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesome5 } from '@expo/vector-icons'

import ScreenA from './src/ScreenA'
import ScreenB from './src/ScreenB'

const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator()

function  App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, size, color}) => {
            let iconName 
            if(route.name === "Screen_A") {
              iconName='autoprefixer'
              // size = focused ? 25 : 20
              // color = focused ? '#f8f' : '#555'
            } else if (route.name === "Screen_B") {
              iconName='btc'
              // size = foused? 25 : 20
              // color = focused ? '#f8f' : '#555'
            } 
            return (
              <FontAwesome5 
                name={iconName}
                // size={size}
                // color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor:'#f8f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          // showLabel: false, //the name
          labelStyle: {fontSize: 14},
          showIcon: true
        }}

        //For material bottom tab bars
        activeColor= '#f8edf6' //name's color, not icon's color
        inactiveColor= '#3e2465'
        barStyle={{backgroundColor: '#694fad'}} // the whole bar
      >
        <Tab.Screen
          name="Screen_A"
          component = {ScreenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen
          name="Screen_B"
          component = {ScreenB}
        />

        
      </Tab.Navigator>

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