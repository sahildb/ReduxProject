import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from '../../LangaugeFile';
import {useTranslation} from 'react-i18next';
import Header from '../common/Header';

const LoginPage = () => {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1, backgroundColor: Colors.White}}>
      <Header title={t('loginPage')} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}> {t('loginPage')}</Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
