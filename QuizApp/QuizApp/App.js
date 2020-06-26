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
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuizScreen from './src/Screens/QuizScreen';
import HomeScreen from './src/Screens/Home';
import SubjectScreen from './src/Screens/Subject';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
            <Stack.Screen name="Home" component={HomeScreen} 
             options={{

              title: "Quiz App" ,
              headerStyle: {
                backgroundColor: '#69738d',
              },
              headerTintColor: '#fff',
            
              headerTitleStyle: {
                alignSelf:'center'
              },
              
            }}
            />
            <Stack.Screen name="Quiz" component={QuizScreen} 
             options={
              {
                headerRight: () => (
                  <TouchableOpacity
                    style={{padding:10}}
                  > 
                    <Icon name='ellipsis-h' size={20}color="#30d1e1" ></Icon>
                    </TouchableOpacity>
                )
              }
            }
            />
            <Stack.Screen name="Subject" component={SubjectScreen}
            options={{

                title: "Choose Your Subject" ,
                headerStyle: {
                  backgroundColor: '#69738d',
                },
                headerTintColor: '#fff',
              
                headerTitleStyle: {
                  alignSelf:'center'
                },
                
              }}
            
            />
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
