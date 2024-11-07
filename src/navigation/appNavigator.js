// src/navigation/AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import HomeScreen from '../screens/HomeScreen';
import EventDetail from '../screens/EventDetail';
import EventForm from '../screens/EventForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{title: 'Get Started'}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Healthy Drinks Menu'}}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{title: 'Event Details'}}
      />
      <Stack.Screen
        name="EventForm"
        component={EventForm}
        options={{title: 'Add/Edit Event'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
