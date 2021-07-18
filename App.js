import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function ScreenA({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_B") // name of the screen
    // navigation.replace("Screen_B") // the current screen will be replaced by Scrren_B in stack, the current will exist from stack, can't be accessed by goBack() 
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>ScreenA</Text>
      <Pressable 
        style={({pressed}) => ({backgroundColor: pressed? '#ddd':"#0f0"})}
        onPress={onPressHandler}
      >
        <Text>Go to screen B</Text>
      </Pressable>
    </View>
  )
}
function ScreenB({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_A")
    // navigation.goBack() 
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>ScreenB</Text>
      <Pressable 
        style={({pressed}) => ({backgroundColor: pressed? '#ddd':"#0f0"})}
        onPress={onPressHandler}
      >
        <Text>Go to screen A</Text>
      </Pressable>
    </View>
  )
}
function ScreenC() {
  return(
    <View style={styles.body}>
      <Text style={styles.text}>ScreenC</Text>
    </View>
  )
}


function  App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen
          name="Screen_A"
          component = {ScreenA}
          options={{
            header: ()=> null
          }}
        />
        <Stack.Screen
          name="Screen_B"
          component = {ScreenB}
        />

        
      </Stack.Navigator>
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