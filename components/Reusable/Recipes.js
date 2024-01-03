import React from "react";
import { View,Text,StyleSheet, Pressable,Image} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import RecipeCard from "./RecipeCard";
import Loading from "./Load";
import { useNavigation } from "@react-navigation/native";

export default function Recipes ({categories, meals}){
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.recipes_header}>
                Công thức
            </Text>
            <View>
                {
                    categories.length ==  0 ? (
                        <Loading size="large" />
                    ):(
                        <MasonryList
                        data={meals}
                        keyExtractor={(item) => item.idMeal}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item,i}) => <RecipeCard item ={item} index = {i} navigation={navigation} />}
                        onEndReachedThreshold={0.1}
                        // onEndReached={() => loadNext(ITEM_CNT)}
                        />
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    recipes_header: {
        fontSize: 30,
        fontWeight:"500",
    }
})
