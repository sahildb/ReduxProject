import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import Main from './screens/Main';
import Colors from '../Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from '../LangaugeFile';
import Example from './screens/Example';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const LocalizationLng = () => {
  const [selectedLang, setSelectedLang] = useState(0);

  const getLang = async () => {
    const val = AsyncStorage.getItem('LANG');

    setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
  };

  useEffect(() => {
    getLang();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="mainScreen" component={Example} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LocalizationLng;
