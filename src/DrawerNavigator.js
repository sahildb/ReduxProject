import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/screen/Home';
import Details from './components/screen/Details';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
