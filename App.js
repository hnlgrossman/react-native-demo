// import { Platform, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImgScreen from './app/screens/ViewImgScreen';
import ItemsScreen from './app/screens/ItemsScreen';
import ImagesScreen from './app/screens/ImagesScreen';

import AppNavigator from './app/navigation/AppNavigator';
import SignupScreen from './app/screens/SignupScreen';
import ActivityIndicator from './app/components/ActivityIndicator';
import AppLoading from 'expo-app-loading';




export default function App() {
  const [isReady, setIsReady] = useState(false);
  const asyncFunc = async () => {
    console.log("start");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("end");
        resolve(`Completed after 2000 milliseconds`);
      }, 2000);
    });
  } 
  
  if (!isReady) {
    return (
      <AppLoading startAsync={asyncFunc} onFinish={() => {setIsReady(true)}}  onError={() => { console.log("ss") }} />
    )
  }

  return (
    <>
  <ActivityIndicator visible={false}/>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  {/* <SignupScreen/> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // height: landscape ?  "100%" : "30%",
//     // width: "100%",
//     // backgroundColor: "blue"
//   },
// });

