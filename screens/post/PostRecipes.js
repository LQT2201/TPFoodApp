import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PostRecipes = () => {
  return (
    <View style = {{ flex: 1, display: 'flex'}}>
        <Image source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4y7zVmHqMDDZPFYCAtIvlWWGYofVYEwNg4AyzbXsRg&s'} 
        style={{width:"100%"}}/>

        <Text>Chia sẻ công thức nấu ăn của bạn với mọi người</Text>
        <Text></Text>

    </View>
  )
}

export default PostRecipes