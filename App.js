import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './screens/onboarding/Onboardingx';
import BottomTabNav from './navigation/BottomTabNav';
import RecipeDetailScreen from './screens/detail/RecipeDetail';
import Home from './screens/home/Home';
import PostRecipes from './screens/post/PostRecipes';
import LoginView from './screens/authentiaction/LoginView';
import SignupView from './screens/authentiaction/SignupView';
import CommentScreen from './screens/comment/Comment';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginView" component={LoginView} options={ {headerShown: false} } />
        <Stack.Screen name="SignupView" component={SignupView} options={ {headerShown: false} } />
        <Stack.Screen name="Bottom" component={BottomTabNav} options={ {headerShown: false} } />
        <Stack.Screen name="Home" component={Home} options={ {headerShown: false} } />
        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={ {headerShown: false} } />
        <Stack.Screen name="PostRecipes" component={PostRecipes} options={ {headerShown: false} } />
        <Stack.Screen name="CommentScreen" component={CommentScreen} options={ {headerShown: false} } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
