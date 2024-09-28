import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import ImagesScreen from '../screens/ImagesScreen';

const ImagesStack = createStackNavigator();


const ImagesNavigator = () => {
  return (
    <ImagesStack.Navigator screenOptions={{ headerShown: false }}>
      <ImagesStack.Screen name="add_images" component={ImagesScreen} />
    </ImagesStack.Navigator>
  );
}


export default ImagesNavigator;