import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard, Pressable, Alert, Modal } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  const onPressHandler = () => {
    if(name.length > 3) {
      setSubmitted(!submitted)
      Keyboard.dismiss()
    } else {
      setShowWarning(true)
    }
    
  }

  return (   
    <View style={styles.body}>
      <SafeAreaView>
        <Modal
          visible={showWarning}
          transparent // Modal background is white by default
          onRequestClose={() => {
            setShowWarning(false)
          }}
          animationType='fade'
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>Warning</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>Name must be longer than 3 letters</Text>
              </View>
              <Pressable onPress={()=>setShowWarning(false)} style={styles.warning_button}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
          
        </Modal>
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
    margin: 10,
    textAlign: 'center'
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
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000078'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: `#ffe4e1`,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:  20
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#f4a460`,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: `#98fb98`,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});