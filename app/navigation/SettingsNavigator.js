import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import SignupScreen from '../screens/SignupScreen';
import MainButton from '../components/MainButton';

const SettingsStack = createStackNavigator();

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <MainButton onPress={() => navigation.navigate('Signup')}><Text>to signup</Text></MainButton>
    </View>
  );
}

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Signup" component={SignupScreen} />
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}


export default SettingsNavigator;