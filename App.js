import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseLevel from './screens/ChooseLevel';
import ChooseLesson from './screens/ChooseLesson';
import ChooseLessonType from './screens/ChooseLessonType';
import Lesson from './screens/Lesson';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Choose Lesson Type">
      <Stack.Navigator>
        <Stack.Screen name="Choose Lesson Type" component={ChooseLessonType} />
        <Stack.Screen name="Choose Lesson" component={ChooseLesson} />
        <Stack.Screen name="Choose Level" component={ChooseLevel} />
        
        <Stack.Screen name="Lesson" component={Lesson} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


