import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/home/Home';
import PostRecipes from '../screens/post/PostRecipes';
import Search from '../screens/search/Search';


const Tab = createBottomTabNavigator();

const tabBarStyle = {
    marginBottom:20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    left: 20,
    right: 20,
}

const BottomTabNav = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    headerShown = {false}
    tabBarShowLabel = {false}
    tabBarHideKeyBoard = {true}
    >
      <Tab.Screen
      name='Home' component={Home} headerShown = {false} options={
        {
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? 'grid' : 'grid-outline'} 
            color={focused ? 'red' : 'gray'} 
            size={26} />
          )
        }
      }
      />
    <Tab.Screen
      name='Search' component={Search} options={
        {
           tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? 'search' : 'search-outline'} 
            color={focused ? 'red' : 'gray'} 
            size={26} />
          )
        }
      }
      />

    <Tab.Screen
      name='PostRecipes' component={PostRecipes} options={
        {
           tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? 'add' : 'add-outline'} 
            color={focused ? 'red' : 'gray'} 
            size={26} />
          )
        }
      }
      />
    

    </Tab.Navigator>
  )
}

export default BottomTabNav