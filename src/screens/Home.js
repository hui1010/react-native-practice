import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../utils/GlobalStyle';

import CustomButton from '../utils/CustomButton'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name: 'MainDB', //name of database
        location: 'default'
    },
    //return a function if successful
    () => {},
    //if error occurs 
    error => {console.log(error)}
)

function Home({navigation, route}) {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(()=>{
    getData()
  }, [])

  const getData = () => {
    try{
      //use the key from the key-value pair in setItem(), return a promise (because setItem() is async)
      // AsyncStorage.getItem('Userdata')
      //   .then(
      //     value => {
      //       if(value != null) {
      //         let user = JSON.parse(value)
      //         setName(user.Name)
      //         setAge(user.Age)
      //       }
      //     }
      //   )
      db.transaction((tx)=>{
        tx.executeSql(
          "SELECT Name, Age FROM Users", // WHERE ...
          [],
          // if successful
          (tx, results) =>{
            var len = results.rows.length
            if(len>0) {
              var userName = results.rows.item(0).Name
              var userAge = results.rows.item(0).Age
              setName(userName)
              setAge(userAge)
            }
          }
        )        
      })
    } catch (error) {
      console.log(error)
    }
  }

const updateData = async () => {
  if(name.length == 0) {
      Alert.alert('Warning!', 'Please write your name')
  } else {
      try {
        // var user = {
        //   Name: name
        // }
        // await AsyncStorage.mergeItem('Userdata', JSON.stringify(user))
        
        //When you only have a string to update
        //new value will replace the previous value
        // await AsyncStorage.setItem('Username', name)

        db.transaction((tx)=>{
          tx.executeSql(
            "UPDATE Users SET Name=?",//WHERE ...
            [name],//value needs to be input
            ()=>{Alert.alert('Success!', 'Your name has been updated.')},//succeed function
            error=>{console.log(error)}
          )
        })
          
      } catch (error) {
          console.log(error)
      }
  }
}

const removeData = async () => {  
    try {
        //key 
        // await AsyncStorage.removeItem('Username')

        //can use clear() method too, it deletes all the keys
        // await AsyncStorage.clear()

      db.transaction((tx)=>{
        tx.executeSql(
          "DELETE FROM Users", //delete all, if want to add condition, user WHERE ...
          [],//value, left empty because there's no value to send in
          ()=>{navigation.navigate('Login')}, //succeed function
          error=>{console.log(error)}
        )
      })

        
    } catch (error) {
        console.log(error)
    }  
}

  return(
    <View style={styles.body}>
      <Text style={[GlobalStyle.customFont, styles.text]}>Welcome {age} years old {name}!</Text>

      <TextInput style={styles.input} placeholder='Enter your name' value={name} onChangeText={(val)=>setName(val)}/>
      <CustomButton title='Save' color='#ff7f00' onPressFunction={updateData}/>
      <CustomButton title='Delete' color='#f40100' onPressFunction={removeData}/>
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
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 70,
    marginBottom: 10,
  }
})

export default Home