import { StyleSheet,Text,FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Slides from "../../components/Onboard/Slides";
const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/slide3.png'),
            tittle: "Find the ferfect recipes to cook"
        },
        {
            id: 2,
            image: require('../../assets/images/slide2.png'),
            tittle: "Discover the food world"
        },
        {
            id: 3,
            image: require('../../assets/images/slide1.png'),
            tittle: "Find the best Recipes in the world"
        },
    ];
    return (
        <FlatList 
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {slides}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Slides item={item}/>}
        />
    );
}

export default Onboarding;

const styles =  StyleSheet.create({});