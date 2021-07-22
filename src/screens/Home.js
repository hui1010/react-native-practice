import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../utils/GlobalStyle';

import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge, increaseAge, getCities } from '../redux/actions'

import CustomButton from '../utils/CustomButton'

function Home({navigation, route}) {

  const { name, age, cities } = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()

  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')

  useEffect(()=>{
    getData()
    dispatch(getCities())
  }, [])

  const getData = () => {
    try{
      //use the key from the key-value pair in setItem(), return a promise (because setItem() is async)
      AsyncStorage.getItem('Userdata')
        .then(
          value => {
            if(value != null) {
              let user = JSON.parse(value)
              dispatch(setName(user.Name))
              dispatch(setAge(user.Age))
            }
          }
        )
    } catch (error) {
      console.log(error)
    }
  }

const updateData = async () => {
  if(name.length == 0) {
      Alert.alert('Warning!', 'Please write your name')
  } else {
      try {
        var user = {
          Name: name
        }
        await AsyncStorage.mergeItem('Userdata', JSON.stringify(user))
        
        //When you only have a string to update
        //new value will replace the previous value
        // await AsyncStorage.setItem('Username', name)
          Alert.alert('Success!', 'Your name has been updated.')
      } catch (error) {
          console.log(error)
      }
  }
}

const removeData = async () => {  
    try {
        //key 
        await AsyncStorage.removeItem('Username')
        //can use clear() method too, it deletes all the keys
        // await AsyncStorage.clear()
        navigation.navigate('Login')
    } catch (error) {
        console.log(error)
    }  
}

  return(
    <View style={styles.body}>
      <Text style={[GlobalStyle.customFont, styles.text]}>Welcome {age} years old {name}!</Text>

      {/* <TextInput style={styles.input} placeholder='Enter your name' value={name} onChangeText={(val)=>dispatch(setName(val))}/>
      <CustomButton title='Save' color='#ff7f00' onPressFunction={updateData}/>
      <CustomButton title='Delete' color='#f40100' onPressFunction={removeData}/>
      <CustomButton title='Increase Age' color='#0080ff' onPressFunction={()=>dispatch(increaseAge())}/> */}

      <FlatList
        keyExtractor={(item, index)=>index.toString()}
        data={cities}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.title}>{item.country}</Text>
            <Text style={styles.subtitle}>{item.city}</Text>
          </View>
        )}
      />
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
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    margin: 10
  }, 
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999'
  }
})

export default Home