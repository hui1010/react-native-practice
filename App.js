import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard, TouchableWithoutFeedback, Button, TouchableOpacity, TouchableHighlight, Pressable, Alert } from 'react-native';

export default function App() {

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onPressHandler = () => {
    if(name.length > 3) {
      setSubmitted(!submitted)
      Keyboard.dismiss()
    } else {
      // 1st parameter - title, 2nd parameter - main text, 3rd parameter - buttons, 4th? - options
      Alert.alert('Warning', 'The name must be more than 3 letters long', 
        [{text: 'Do not show again', onPress: () => console.warn('Do not show Pressed'), style:'destructive'},
        {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style:'destructive'},
        {text: 'OK', onPress: () => console.warn('OK Pressed'), style:'destructive'}],
        {cancelable: true, onDismiss: () => console.warn('Alert dismissed')}// only for Android
      )
    }
    
  }

  return (   
  // <DismissKeyboard>
    <View style={styles.body}>
      <SafeAreaView>
        <Text style={styles.text}>
          Please enter your name: 
        </Text> 
      
        <TextInput 
          style={styles.input} 
          placeholder='e.g. Huiyi'
          onChangeText={value => setName(value)}  
          />
    

        <Pressable
          style={({pressed})=> [
            {backgroundColor: pressed? '#ddd' : '#20b2aa'},
            styles.button
          ]}
          onPress={onPressHandler}
          // delayLongPress={2000}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          // disabled={submitted}
          android_ripple={{color: '#90ee90'}}
        >
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </Pressable>

        {
          submitted ? 
            <Text style={styles.text}>
              You are registed as: {name} 
            </Text> 
            :
            null
        }

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
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  }
});