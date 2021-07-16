import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0)
  const handlePress = () => {
    setNumber(number + 5)
  }


  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      {/* <Button title='Click me' onPress={()=>{Linking.openURL('https://github.com/')}}></Button> */}
      <Button title='add' onPress={handlePress}></Button>
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