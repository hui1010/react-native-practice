import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, RefreshControl, FlatList, SectionList } from 'react-native';

export default function App() {
 
  const [Items, setItems] = useState([
    {item: 'Item 1'},
    {item: 'Item 2'},
    {item: 'Item 3'},
    {item: 'Item 4'},
    {item: 'Item 5'},
    {item: 'Item 6'},
    {item: 'Item 7'},
    {item: 'Item 8'},
    {item: 'Item 9'}
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    // setItems([...Items, {item: 'New added'}])
    const adding = DATA.length + 1
    setDATA([...DATA, {
      title: `Title ${adding}`,
      data: [`Item ${adding}-1`, `Item ${adding}-2`, `Item ${adding}-3`]
    }
  ])
    setRefreshing(false)
  }

  const [DATA, setDATA]  = useState( 
    [
      {
        title: `Title 1`,
        data: [`Item 1-1`, `Item 1-2`, `Item 1-3`]
      } 
    ]
  )
  return (
     <SafeAreaView > 
       <SectionList 
        style={styles.container}
        keyExtractor={(item, index) => String(index)}
        sections = {DATA} 
        renderItem={({item}) => (
          
            <Text style={styles.text}>{item}</Text>
                    
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}  
        refreshControl={
         <RefreshControl 
          Refreshing={Refreshing}
          onRefresh={onRefresh}
          />
        }
       />

       {/* <FlatList 
        style={styles.container}
        keyExtractor={(item, index) => String(index)}
        //  numColumns={2} 
        // horizontal
        // inverted //default: left ->right, inverted: right -> left
        data={Items}
        renderItem={ ({item})=> (
              <View style={styles.item}>
                <Text style={styles.text}>{item.item}</Text>
              </View>
            )
        }
        refreshControl={
          <RefreshControl 
            refreshing={Refreshing}
            onRefresh={onRefresh}
          />
        }       
       /> */}
      {/* <ScrollView 
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
          return (
            <View style={styles.item} key={item.key}>
              <Text style={styles.text}>{item.item}</Text>
            </View>
          )
        })
      }
      </ScrollView> */}
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
    // width: '100%',
    height: 60,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: '500',
  }
});