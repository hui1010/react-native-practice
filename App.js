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
      <View style={styles.view1}>
        <View style={styles.text1}><Text style={styles.texts}>1</Text></View>
        <View style={styles.text2}><Text style={styles.texts}>2</Text></View>
        <View style={styles.text3}><Text style={styles.texts}>3</Text></View>
      </View>
      <View style={styles.view2}>
        <View style={styles.text4}><Text style={styles.texts}>4</Text></View>
      </View>
      <View style={styles.view3}>
        <View style={styles.text5}><Text style={styles.texts}>5</Text></View>
      </View>
      <View style={styles.view4}>
        <View style={styles.text6}><Text style={styles.texts}>6</Text></View>
        <View style={styles.text7}><Text style={styles.texts}>7</Text></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column'
  },
  view1: {
    flex: 1,
    flexDirection: 'row'
  },
  view2: {
    flex: 1
  },
  view3: {
    flex: 1
  },
  view4: {
    flex: 3,
    flexDirection: 'row', 
  }, 
  text1: {
    backgroundColor: `#7fffd4`,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text2: {
    backgroundColor: `#f08080`,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text3: {
    backgroundColor: `#f0e68c`,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text4: {
    backgroundColor: `#ff4500`,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text5: {
    backgroundColor: `#00fa9a`, 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text6: {
    backgroundColor: `#f5fffa`,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text7: {
    backgroundColor: `#add8e6`,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texts: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  }
});