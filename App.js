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
      <Text style={styles.name}>{number}</Text>
      {/* <Button title='Click me' onPress={()=>{Linking.openURL('https://github.com/')}}></Button> */}
      <View style={styles.button}>
      <Button title='add' onPress={handlePress} style={styles.button}></Button>
      </View>
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
  name: {
    color: `#ff8c00`
  },
  button: {
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: `#7fffd4`,
    marginTop: 10
  }
});