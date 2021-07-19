import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>React Native Tutorial</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#20b2aa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Header
