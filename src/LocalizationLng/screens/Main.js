import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';
import LangaugeModal from '../common/LangaugeModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from '../../LangaugeFile';

const Main = () => {
  const [langmodalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const navigation = useNavigation();

  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + '');
  };
  const changeLang = () => {
    return selectedLang == 0
      ? translation[0].English
      : selectedLang == 1
      ? translation[0].Hindi
      : selectedLang == 2
      ? translation[0].Punjabi
      : selectedLang == 3
      ? translation[0].Tamil
      : selectedLang == 4
      ? translation[0].Urdu
      : translation[0].English;
  };
  const btnChangeLang = () => {
    return selectedLang == 0
      ? translation[3].English
      : selectedLang == 1
      ? translation[3].Hindi
      : selectedLang == 2
      ? translation[3].Punjabi
      : selectedLang == 3
      ? translation[3].Tamil
      : selectedLang == 4
      ? translation[3].Urdu
      : translation[3].English;
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.selectText}>{changeLang()}</Text>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.btnText}>Login Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.btnText}>Register Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.selectLangaugeBtn}
          onPress={() => setLangModalVisible(!langmodalVisible)}>
          <Text style={styles.btnSelectText}>{btnChangeLang()}</Text>
        </TouchableOpacity>
        <LangaugeModal
          langmodalVisible={langmodalVisible}
          setLangModalVisible={setLangModalVisible}
          onSelectLang={x => {
            setSelectedLang(x);
            saveSelectedLang(x);
          }}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 22,
    marginBottom: 20,
  },
  btnLogin: {
    backgroundColor: Colors.Gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  btnRegister: {
    backgroundColor: Colors.Gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    color: Colors.White,
    fontWeight: '700',
  },
  btnSelectText: {
    fontSize: 18,
    color: Colors.Black,
    fontWeight: '700',
  },
  selectLangaugeBtn: {
    borderWidth: 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
  },
});
