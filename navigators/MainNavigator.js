import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screens/Details';
import Main from '../screens/Main';
import Video from '../screens/Video';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
