import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Huiyi!</Text>
      <Button title='Click me' onPress={()=>{Linking.openURL('https://github.com/')}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});