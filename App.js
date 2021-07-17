import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, SafeAreaView, RefreshControl } from 'react-native';

export default function App() {
 
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'}
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...Items, {key: 69, item: 'New added'}])
    setRefreshing(false)
  }

  return (
     <SafeAreaView > 
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl 
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={[`#f0e68c`]} //platform - Android
          />
        }
      >
      {
        Items.map((item) => {
          return [
            <View style={styles.item} key={item.key}>
              <Text style={styles.text}>{item.item}</Text>
            </View>
          ]
        })
      }
      </ScrollView>
      <StatusBar style="auto" />
     </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: `#fff`, 
    height: '100%'
  },
  item: {
    backgroundColor: `#add8e6`,
    width: '100%',
    height: 60,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: '500',
  }
});