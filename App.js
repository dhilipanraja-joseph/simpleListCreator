import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Counter from './components/Counter';
import Todos from './components/Todos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Todos') {
                return (
                  <Ionicons
                    name="ios-list"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Counter') {
                return (
                  <Ionicons
                    name="flower"
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#4630EB',
          })}
        >
          <Tab.Screen name="Todos" component={Todos}/>
          <Tab.Screen name="Counter" component={Counter}/>
        </Tab.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
};
