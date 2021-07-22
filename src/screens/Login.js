import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge } from '../redux/actions'

import CustomButton from '../utils/CustomButton'

export default function Login({navigation}) {

    //With reduc
    const { name, age } = useSelector(state=>state.userReducer)
    const dispatch = useDispatch()

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')

    useEffect(()=>{
        getData()
      }, [])
    
      //if the user already exist, go to the home page
      const getData = () => {
        try{
          //use the key from the key-value pair in setItem(), return a promise (because setItem() is async)
          AsyncStorage.getItem('Userdata')
            .then(
              value => {
                if(value != null) {
                  navigation.navigate('Home')
                }
              }
            )
        } catch (error) {
          console.log(error)
        }
      }    

    const setData = async () => {
        if(name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your info')
        } else {
            dispatch(setName(name))
            dispatch(setAge(age))
            try {
                var user = {
                    Name: name,
                    Age: age
                }
                //key value pair
                await AsyncStorage.setItem('Userdata', JSON.stringify(user)) //if it is a string, can just right the variable name, e.g. name, no need JSON.stringify()
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
                    source={require('../../assets/redux.jpg')}
                />
                <Text style={styles.text}>Redux</Text>
                <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(val)=>dispatch(setName(val))}/>
                <TextInput style={styles.input} placeholder='Enter your age' onChangeText={(val)=>dispatch(setAge(val))}/>
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
        width: 100,
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
