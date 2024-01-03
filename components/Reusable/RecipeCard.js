import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Rating, AirbnbRating } from 'react-native-ratings'; 

const RecipeCard = ({ item, index, navigation }) => {
    let even = index % 2 === 0;

    return (
        <Animated.View
            entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}
            style={styles.cardContainer}
        >
            <Pressable
                onPress={() => { navigation.navigate('RecipeDetailScreen', { ...item }) }}
                style={styles.card}
            >
                <View>
                    <Image
                        sharedTransitionTag={item.strMeal}
                        source={{ uri: item.strMealThumb }}
                        style={styles.image}
                    />

                    <Ionicons name='heart-outline' style = {{position: 'absolute', right:5, top: 5}} size={25} color = {'white'}/>
                </View>

                <View style={styles.tagContainer}>

                    <Image
                        sharedTransitionTag={item.strMeal}
                        source={{ uri: item.strMealThumb }}
                        style={styles.tagImage}
                    />

                    <Text style={styles.tagText}>
                        {item.author}
                    </Text>
                       
                </View>

                <Text style={styles.mealText}>
                    {item.strMeal.length > 15 ? item.strMeal.slice(0, 15) + '...' : item.strMeal}
                </Text>

                <AirbnbRating
                count={5}
                showRating = {false}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", ]}
                defaultRating={5}
                size={10}  
                isDisabled = {true} 
                ratingColor = {'orange'}
                />

            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '97%',
        marginBottom: 8,
        marginLeft: 5,
        elevation: 3, // for Android shadow
        shadowColor: 'rgba(0, 0, 0, 0.1)', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 12,
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 165,
        borderRadius: 12,
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    tagImage: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 5,
    },
    tagText: {
        fontSize: 13,
        fontWeight: '300',
    },
    mealText: {
        fontSize: 15,
     fontWeight: '500',
        
    },
});

export default RecipeCard;
