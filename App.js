import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  const [name, setName] = useState('')

  return (   
  // <DismissKeyboard>
    <View style={styles.body}>
      <SafeAreaView>
        <Text style={styles.text}>
          Please enter your name: 
        </Text> 
      
        <TextInput 
          // multiline
          style={styles.input} 
          placeholder='e.g. Huiyi'
          onChangeText={value => setName(value)}  
          // keyboardType='numeric'
          maxLength={5}
          // editable={false} // Won't be able to type
          // secureTextEntry
          />
        

        <Text style={styles.text}>
          Your name is: {name} 
        </Text> 
      </SafeAreaView>
    </View>  
  // </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10
  },
  input: {
    width: 280,
    borderWidth: 1,
    borderColor: `#f5f5dc`,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20
  }
});