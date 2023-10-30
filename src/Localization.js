// Example of Localization in React Native Multi Language Localization
// https://aboutreact.com/localization-in-react-native/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentScreen from './components/screen/ContentScreen';
import LanguageSelectionScreen from './components/screen/LanguageSelectionScreen';

const Stack = createNativeStackNavigator();

const Localization = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelectionScreen">
        <Stack.Screen
          name="LanguageSelectionScreen"
          component={LanguageSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{
            // title: 'Content Screen', //Set Header Title
            headerStyle: {
              backgroundColor: 'black', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Localization;
