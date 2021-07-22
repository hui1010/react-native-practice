import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import GlobalStyle from '../utils/GlobalStyle'

export default function Map({route}) {

    const {city} = route.params

    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.customFont, styles.text]}>
                {city}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        margin: 10
    }
})