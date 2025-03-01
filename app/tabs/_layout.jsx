import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../tabs/home';
import Profile from '../tabs/profile'
import Add from '../tabs/addItem'
import colors from '../../constants/colors';

import { getTask } from '../../components/taskStorage';

const Tabs = createBottomTabNavigator();




export default function TabLayout() {
  return (

        <Tabs.Navigator screenOptions={styles.tabs}>
            <Tabs.Screen name="Home" component={Home} options={styles.header}></Tabs.Screen>
            <Tabs.Screen name="Add" component={Add} options={styles.header}></Tabs.Screen>
            <Tabs.Screen name="Profile" component={Profile} options={styles.header}></Tabs.Screen>
        </Tabs.Navigator>


  )
}

const styles = StyleSheet.create({
    header:{
        headerShown: false,
    },
    tabs:{
        tabBarStyle: { 
            backgroundColor: colors.nav,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
    }
})