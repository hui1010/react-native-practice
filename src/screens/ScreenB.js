import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import GlobalStyle from '../utils/GlobalStyle';

function ScreenB({navigation}) {

    const onPressHandler = () => {
      navigation.navigate("Screen_A")
      // navigation.goBack() 
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>ScreenB</Text>
        <Pressable 
          style={({pressed}) => ({backgroundColor: pressed? '#ddd':"#0f0"})}
          onPress={onPressHandler}
        >
          <Text style={GlobalStyle.customFont} >Go to screen A</Text>
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