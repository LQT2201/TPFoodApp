import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { doc, updateDoc, dele, setDoc } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import { getDocs, app, db, collection, query, where } from '../../firebase'
import { getAuth } from "firebase/auth";


const FavouriteScreen = () => {
  const auth = getAuth();

  const [favourites, setFavourites] = useState([]);
  const [mealFavourites, setmealFavourites] = useState([]);
  const [meals, setMeal] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getFavourite();
      getMeal();
      getMealFavorite(favourites, meals);
    }, [])
  );

  const getFavourite = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "favorite"));
      const favoriteData = [];
      querySnapshot.forEach((doc) => {
        favoriteData.push(doc.data());
      });
      setFavourites(favoriteData);
    } catch (error) {
      console.log('Loi: ', error);
    }
  };

  const getMeal = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "meals"));
      const mealsData = [];
      querySnapshot.forEach((doc) => {
        mealsData.push(doc.data());
      });

      setMeal(mealsData);

    } catch (error) {
      console.log('Loi: ', error);
    }
  };

  const getMealFavorite = async (favourites, meals) => {
    let tempMealFavourites = [];
    for (let i = 0; i < favourites.length; i++) {
      const item = favourites[i];
      if (item.Email === auth?.currentUser?.email) {
        for (let j = 0; j < meals.length; j++) {
          if (item.idMeal === meals[j].idMeal) {
            tempMealFavourites.push(meals[j]);
          }
        }
      }
    }
    setmealFavourites(tempMealFavourites);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        await getFavourite();
        await getMeal();
        getMealFavorite(favourites, meals);
      };
      fetchData();
    }, [favourites, meals]) // Thêm các dependencies vào mảng dependency của useCallback
  );



  const renderFavouriteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.avatar} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.userName}>{item.author}</Text>
        <Text style={styles.foodName}>{item.strMeal}</Text>
      </View>
      <Image source={{ uri: item.strMealThumb }} style={styles.foodImage} />
    </View>
  );



  return (
    <View style={styles.container}>

      {mealFavourites.length > 0 ? (
        <View>
          <Text style={styles.FavouritesText}>Danh sách yêu thích</Text>
          <TextInput
            placeholder="Tìm trong 4 món"
            style={styles.searchInput}
          />
          <FlatList
            data={mealFavourites}
            keyExtractor={item => item.idMeal.toString()}
            renderItem={renderFavouriteItem}
          />
        </View>
      ) : (
        <Text style={styles.FavouritesText}>Chưa có món ăn yêu thích nào!!!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
  FavouritesText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'red',

  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  foodName: {
    color: 'gray',
  },
  foodImage: {
    width: 100,
    height: 100,
  },
  likeButton: {
    padding: 10,
    alignItems: 'center',
  },
});

export default FavouriteScreen;