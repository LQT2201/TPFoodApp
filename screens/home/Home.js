import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import Categories from '../../components/Reusable/Categories';
import Recipes from '../../components/Reusable/Recipes';
import axios from 'axios';
import {getDocs,app,db,collection,query, where} from '../../firebase'


const Home = () => {
    const [activeCategory, setActiveCategory] = useState('beef');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect( () => {
        getCategories();
        getRecipes();
    },[])

    const getCategories = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            const categoriesData = [];
            querySnapshot.forEach((doc) => {
                categoriesData.push(doc.data());
            });
            setCategories(categoriesData);
            // console.log(categoriesData);
        } catch (error) {
            console.log('Loi: ', error);
        }
    }; 

    const getRecipes = async (category="Beef")=>{
        try{
            const q = query(collection(db, "meals"), where("strCategory", "==", category));
            const mealsData = [];

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                mealsData.push(doc.data());
            console.log(doc.id, " => ", doc.data());
            });

            setMeals(mealsData);

        }catch(err){
          console.log('error: ',err.message);
        }
      }
    
    const  handleCategories = (category) => {
        getRecipes(category);
        setActiveCategory(category);
        setMeals([]);
    };

    const handleSearch = () => {
        // Lọc danh sách công thức nấu ăn dựa trên nội dung tìm kiếm
        const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));
        setMeals(filteredMeals);

    };


  return (
    <View style={styles.container}>
            <Text></Text>
            <ScrollView>
                {/* avatar */}
                <View style={styles.avatar} >
                    <Image source={require('../../assets/icon.png')} style={styles.avatar_image} ></Image>
                    <Ionicons name='notifications' size={25} color={'gray'}></Ionicons>
                </View>

                {/* punchline */}
                <View >
                    <Text style={styles.greeting}>Xin chào, Bro!</Text>
                <View>
                    <Text style={styles.punchline} >Món ngon riêng bạn,</Text>
                </View>
                    <Text style={styles.punchline} >chỉ cần ở  
                        <Text style={styles.punchline_bold}>Nhà</Text>
                    </Text>
                </View>

                {/* search bar */}
                <View style={styles.search_container}>
                    <TextInput
                        placeholder='Tìm kiếm bất kì công thức nào'
                        placeholderTextColor={'gray'}
                        style={styles.search_bar}
                        // value={searchQuery}
                        // onChangeText={(text) => setSearchQuery(text)}
                        
                    />
                    <TouchableOpacity style={styles.search_icon} >
                        {/* <MagnifyingGlassIcon  strokeWidth={3} color="gray" /> */}
                    </TouchableOpacity>
                </View>

                {/* categories */}
                <View>
                    <Categories categories={categories} />
                </View>

                {/* recipe */}
                {meals.length > 0 ? (
                    <Recipes categories={categories} meals={meals} />
                ) : (
                    <Text style={{ textAlign: 'center',fontSize: 20, marginTop: 20,}}>Chưa có công thức !!!</Text>
                )}
                
                
            </ScrollView>
            
        </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      padding: 10,
      flex: 1,
      backgroundColor: 'white',
  },
  avatar: {
      display:'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
  },
  avatar_image: {
      width:50,
      height:50,
      borderRadius: 50,
      margin: 20,
  },
  greeting: {
      fontSize:17,
      fontWeight: '600',
  },
  punchline: {
      fontSize:35,
      fontWeight: '600',
  },
  punchline_bold: {
      color:'orange',
  },

  search_container: {
      display:'flex',
      flexDirection: 'row',
      backgroundColor: '#FFFBF5',
      borderRadius: 50,
      borderWidth: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:20,
      padding: 5,
      paddingLeft: 15,
  },
  search_bar:{
      fontSize: 17,
      height: 45,
  },
  search_icon:{
      width:40,
      height:40,
      borderRadius: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
