import { View, Text } from 'react-native'
import { Redirect } from 'expo-router'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Layout from './tabs/_layout';

import React from 'react'

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Layout}
          options={{headerShown: false}}
          


        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index