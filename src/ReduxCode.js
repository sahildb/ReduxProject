import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/Main';
import CartDetails from './components/CartDetails';
import Chats from './components/Chats';

const Stack = createNativeStackNavigator();
const ReduxCode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={Chats} />
        {/* <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="Details" component={CartDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ReduxCode;

const styles = StyleSheet.create({});
