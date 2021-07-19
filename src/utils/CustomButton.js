import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

const MyButton = (props) => {
    return (
        <Pressable
          style={({pressed})=> [
            {backgroundColor: pressed? '#ddd' : '#20b2aa'},
            styles.button,
            {...props.style}
          ]}
          onPress={props.onPressFunction}
          // delayLongPress={2000}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          // disabled={submitted}
          android_ripple={{color: '#90ee90'}}
        >
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
      },
})

export default MyButton