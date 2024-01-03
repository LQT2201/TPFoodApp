import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import CommentScreen from '../comment/Comment';

export default function RecipeDetailScreen(props) {

    let item = props.route.params;
    
    const ingredients = [];
    const steps = [];
    const [isFavourite, setIsFavourite] = useState(false);

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState();

    useEffect(() => {
        
     
    }, []);

    const checkFavouriteStatus = async (mealId) => {
        
    };

    const handleFavourite = async (mealId) => {
        
    };

    // Lặp qua các thành phần và đo lường
    for (let i = 1; i <= 10; i++) {
        const ingredient = item[`strIngredient${i}`];
        const measure = item[`strMeasure${i}`];

        // Kiểm tra xem có giá trị không rỗng
        if (ingredient && measure) {
        ingredients.push(`${measure}  -- ${ingredient}`);
        }
    };
    
    for (let i = 1; i <= 10; i++) {
        const step = item[`step${i}`];

        if (step) {
        steps.push(`${step}`);
        }
    };

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 30 }}
            >

                {/* recipe image */}
                <View style={styles.recipe_container}>
                    <Image
                        source={{ uri: item.strMealThumb }}
                        sharedTransitionTag={item.strMeal}
                        style={styles.recipe_image}
                    />
                </View>

                {/* back button */}
                <Animated.View entering={FadeIn.delay(200).duration(1000)} style={styles.back_container}>
                    <TouchableOpacity style={styles.back_btn} onPress={() => navigation.goBack()}>
                        <Ionicons size={20} strokeWidth={5} color="#fbbf24" name='chevron-back' ></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.favourite_btn} onPress={() => handleFavourite(item.idMeal)}>
                        <Ionicons name='heart' size={20} strokeWidth={5} color={isFavourite ? "red" : "gray"} ></Ionicons>
                    </TouchableOpacity>
                </Animated.View>

                {/* meal description */}{
                    
                        <View style={styles.description_container}>
                            {/* name and area */}
                            <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={styles.name_container}>
                                <Text style={styles.meal_name}>
                                    {item.strMeal} 
                                </Text>
                            </Animated.View>

                            {/* author */}
                            <Animated.View entering={FadeInDown.delay(50).duration(700).springify().damping(12)} style={styles.author_container}>
                               <Image
                               style = {{width: 40, height:40,borderRadius: 50, marginRight: 20}}
                               source={{ uri: item.strMealThumb }}/>

                               <View > 
                                    <Text style={{fontSize: 17}}>{ item.author }</Text>

                                    <View style = {{flexDirection:'row', alignItems:'center'}}>
                                        <Ionicons name='location' color={'gray'}></Ionicons>
                                        <Text style={{color:'gray'}}> Viet nam </Text>
                                    </View>
                               </View>
                               
                            </Animated.View>
                            
                            {/* caption */}
                            <Animated.View entering={FadeInDown.delay(70).duration(700).springify().damping(12)} style={styles.author_container}>
                               <Text> { item.caption }</Text>
                            </Animated.View>

                            {/* misc */}
                            <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={styles.misc_container}>
                                <View style={styles.clock_container}>
                                    <View
                                        style={styles.clock_icon}
                                    >
                                        <Ionicons name = 'time' size={30} strokeWidth={2.5} color={'#525252"'}></Ionicons>
                                    </View>
                                    <View style={styles.minute}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', }} >
                                            {item.time}
                                        </Text>
                                        <Text style={{ fontSize: 13, fontWeight: '700', }}>
                                            Phút
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.clock_container}>
                                    <View
                                        style={styles.clock_icon}
                                    >
                                        <Ionicons name = 'people-circle' size={30} strokeWidth={2.5} color="#525252"></Ionicons>
                                    </View>
                                    <View style={styles.minute}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', }} >
                                            {item.serve}
                                        </Text>
                                        <Text style={{ fontSize: 13, fontWeight: '700', }}>
                                            Người
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.clock_container}>
                                    <View
                                        style={styles.clock_icon}
                                    >
                                        <Ionicons name = 'thermometer-sharp' size={30} strokeWidth={2.5} color="#525252"></Ionicons>
                                    </View>
                                    <View style={styles.minute}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', }} >
                                            {item.temperature}
                                        </Text>
                                        <Text style={{ fontSize: 13, fontWeight: '700', }}>
                                            Nhiệt độ
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.clock_container}>
                                    <View
                                        style={styles.clock_icon}
                                    >
                                        <Ionicons size={30} strokeWidth={2.5} color="#525252" name = 'build-sharp'></Ionicons>
                                    </View>
                                    <View style={styles.minute}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', }} >
                                            Level
                                        </Text>
                                        <Text style={{ fontSize: 13, fontWeight: '700', }}>
                                            {item.level}
                                        </Text>
                                    </View>
                                </View>


                            </Animated.View>

                            <View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginVertical: 8, marginTop:20, margin:10}}></View>

                            {/* ingredients */}
                            <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)}>
                                <Text style={{ fontSize: 20, fontWeight: 700, marginVertical: 10, }}>
                                    Nguyên liệu
                                </Text>
                                <View >
                                    {ingredients.map((item, index) => (
                                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Ionicons name="checkmark-circle" size={20} color="green" />
                                            <Text style={{ fontSize: 17, fontWeight: '400', marginLeft: 10 }}>
                                            {item}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </Animated.View>

                            {/* instructions */}
                            <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)}
                                style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 20, flex: 1, fontWeight: '700', marginVertical: 20, }}>
                                    Hướng dẫn
                                </Text>
                                {steps.map((step, index) => {
                                    const stepDetails = step.split(',');

                                    return (
                                        <View key={index} style={styles.stepContainer}>
                                            <Text style={styles.stepNumber}>Bước {stepDetails[0]}</Text>

                                            {stepDetails.length >= 1 && (
                                                <Text style={styles.stepDescription}>{stepDetails[1]}</Text>
                                            )}

                                            {stepDetails.length >= 2 && stepDetails[2] && (
                                                <Image source={{ uri: stepDetails[2].trim() }} style={styles.stepImage} />
                                            )}  
                                            
                                        </View>
                                    );
                                })}

                            </Animated.View>

                        </View> 
                }

                <View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginVertical: 8, margin:10}}></View>
                        
                <View style = {{margin: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CommentScreen')} 
                    style ={{display:'flex', flexDirection:'row', marginBottom: 20}}>
                        <Ionicons size={20} strokeWidth={5} color="#fbbf24" name="people-circle"></Ionicons>
                        <Text style={{color:'gray', fontSize:15, marginLeft: 10}}>Bình luận</Text>
                        <Text style={{color:'gray', fontSize:15, marginLeft: 10}}>10</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{marginRight: 15,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        padding: 8,
                        display:'flex',
                        flexDirection:'row'}} 
                
                    onPress={() => navigation.navigate('CommentScreen',[...item])}>
                        <Ionicons name='person-outline' size={20} strokeWidth={5} color={isFavourite ? "red" : "gray"}  ></Ionicons>
                        <Text style ={{marginLeft: 10}}>Press Here</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    recipe_container: {
        display: 'flex',
        padding: 5,
        justifyContent: 'center',


    },
    recipe_image: {
        width: '100%',
        height: 350,
        borderRadius: 40,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    },
    back_container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    back_btn: {
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8,
    },
    favourite_btn: {
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8,
    },
    description_container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 15,
    },
    name_container: {
        marginTop: 5,
        marginBottom: 20,
    },
    meal_name: {
        fontSize: 25,
        fontWeight: '700',
        flex: 1,
    },
    meal_area: {
        fontSize: 20,
        fontWeight: '400',
        flex: 1,
    },
    misc_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    clock_container: {
        display: 'flex',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
    },
    clock_icon: {
        backgroundColor: 'white',
        display: 'flex',

        borderRadius: 50,
        padding: 10,
    },
    author_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        
    },
    container: {
        padding: 16,
      },
      stepContainer: {
        marginBottom: 20,
      },
      stepNumber: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
      },
      stepDescription: {
        fontSize: 16,
        marginBottom: 12,
      },
      stepImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
      },
});