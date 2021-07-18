import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function ScreenB({navigation, route}) {

    const {ItemName, ItemId} = route.params

    const onPressHandler = () => {
      navigation.navigate("Screen_A", {Message: 'Message to Screen A from Screen B'})
      // navigation.goBack() 
    //   navigation.setParams({ItemId: 29})
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>ScreenB</Text>
        <Pressable 
          style={({pressed}) => ({backgroundColor: pressed? '#ddd':"#0f0"})}
          onPress={onPressHandler}
        >
          <Text>Go to screen A</Text>
          <Text style={styles.text}>{ItemName}</Text>
          <Text style={styles.text}>ID: {ItemId}</Text>
        </Pressable>
      </View>
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
  

export default ScreenB