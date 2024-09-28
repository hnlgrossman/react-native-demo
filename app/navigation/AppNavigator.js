import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import ImagesNavigator from './ImagesNavigator';
import NewImageButton from './NewImageButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomePage" component={HomeNavigator} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trophy" size={size} color={color} />
            ),
          }}/>
        <Tab.Screen name="ImagesPage" component={ImagesNavigator} options={({navigation}) => ({
            tabBarButton: () => <NewImageButton onPress={ () => {navigation.navigate('ImagesPage')} }/>,
          })} />
        <Tab.Screen name="SettingsPage" component={SettingsNavigator} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }} />
    </Tab.Navigator>
  );
}


export default AppNavigator;