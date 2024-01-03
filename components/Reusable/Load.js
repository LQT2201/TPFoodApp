import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading(props) {
  return (
    <View style={{justifyContent:'center',alignItems:'center',}}>
      <ActivityIndicator {...props} />
    </View>
  )
}