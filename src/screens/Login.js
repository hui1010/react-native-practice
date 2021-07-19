import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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


export default function Login({navigation}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(()=>{
        createTable()
        getData()
      }, [])

    const createTable = () => {
        db.transaction((tx)=>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                +"Users" //table name
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);" //columns
            )
        })
    }
    
    const getData = () => {
        try{
            //use the key from the key-value pair in setItem(), return a promise (because setItem() is async)
            // AsyncStorage.getItem('Userdata')
            //     .then(
            //     value => {
            //     //if the user already exist, go to the home page
            //         if(value != null) {
            //         navigation.navigate('Home')
            //         }
            //     }
            //     )
            db.transaction((tx)=>{
                "SELECT Name, Age FROM Users", // WHERE ...
                [],
                // if successful
                (tx, results) =>{
                  var len = results.rows.length
                  if(len>0) {
                    navigation.navigate('Home')
                  }
                }
              })
        } catch (error) {
            console.log(error)
        }
    }    

    const setData = async () => {
        if(name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your info')
        } else {
            try {
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // //key value pair
                // await AsyncStorage.setItem('Userdata', JSON.stringify(user)) //if it is a string, can just right the variable name, e.g. name, no need JSON.stringify()
                await db.transaction( async (tx)=>{
                    await tx.executeSql(
                        //"+value+"
                        "INSERT INTO Users (Name, Age) VALUES ('"+name+"',"+age+")"//first one has to be a string, so wrapped inside ''

                        //another option - in an array
                        // "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        // [name, age] // Note the order is important here
                    )
                })
                navigation.navigate('Home')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.body}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/sqlite.png')}
                />
                <Text style={styles.text}>Async Storage</Text>
                <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(val)=>setName(val)}/>
                <TextInput style={styles.input} placeholder='Enter your age' onChangeText={(val)=>setAge(val)}/>
                <CustomButton title='Login' color='#1eb900' onPressFunction={setData}/>
            </View>
        </TouchableWithoutFeedback>
    )
        
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00f'
    },
    logo: {
        width: 200,
        height: 100,
        margin: 60
    },
    text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 60,
        marginBottom: 10,
    }
})
