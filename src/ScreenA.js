import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function ScreenA({navigation, route}) {

    const onPressHandler = () => {
        navigation.navigate("Screen_B") // first parameter - name of the screen
      // navigation.replace("Screen_B") // the current screen will be replaced by Scrren_B in stack, the current will exist from stack, can't be accessed by goBack() 
    
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>ScreenA</Text>
        <Pressable 
          style={({pressed}) => ({backgroundColor: pressed? '#ddd':"#0f0"})}
          onPress={onPressHandler}
        >
          <Text>Go to Screen B</Text>
          <Text>{route.params?.Message}</Text>
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

export default ScreenA