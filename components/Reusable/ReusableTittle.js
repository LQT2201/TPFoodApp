import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import ReusableText from './ReusableText';
import HeightSpacer from './HeightSpacer';
import WidthSpacer from './WidthSpacer';

const ReusableTittle = ({item}) => {
    return (
        <TouchableOpacity style ={styles.container}>
            <View style = {styles.innerImage}>
                <Image 
                source={item.image}
                style={styles.titleImage}/>
            </View>

            <WidthSpacer width = {15} ></WidthSpacer>

            <View>
                <ReusableText  
                text={item.title}
                color={"black"}
                size = {15}
                />
                
                <HeightSpacer height = {8}></HeightSpacer>

                <Text stlye={styles.author}>{item.author} sdafadsf </Text>

                
            </View>

        </TouchableOpacity>
    );
}

export default ReusableTittle

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    titleImage: {
        borderRadius:12,
        width:80,
        height: 80,
    },
    innerImage: {
        display:'flex',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
    author: {
        fontSize:15,
        color: 'gray'
    }
})