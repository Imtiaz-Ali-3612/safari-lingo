/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuizScreen from './src/Screens/QuizScreen';
import HomeScreen from './src/Screens/Home';
import SubjectScreen from './src/Screens/Subject';


const Stack = createStackNavigator();

const Home=()=>{
  return(
    <Text>Home</Text>
  )
}
const Quiz=()=>{
  return(
    <Text>Quiz</Text>
  )
}


const App =() => {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Subject" component={SubjectScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1    
  }
});

export default App;
