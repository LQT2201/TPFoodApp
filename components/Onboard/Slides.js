import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Slides = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style = {styles.image} />
      <View stlye={styles.stack}>
        <Text stlye = {styles.tittle}> {item.tittle} </Text>
      </View>
    </View>
  )
}

export default Slides;

const styles =  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        resizeMode: "cover",
        height:100,
        width: "100%",
        height:"100%",
    },
    stack: {
      position: "absolute",
      bottom: 0,
      marginBottom: 60,
      marginHorizontal: 20,
    },
    tittle: {
      fontSize: 40,
      color: 'white',
    },
    
});