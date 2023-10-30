import React, {Component, useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../Colors';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import Store from './Redux/Store';
const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};
export default function HomePage({selectedItem}) {
  const [data, setData] = useState([
    {email: 'sahil@gmail.com', selected: false},
    {email: 'sd@gmail.com', selected: false},
  ]);
  const navigation = useNavigation();
  const onSelect = (index, item) => {
    console.log('i', item);
    const temp = data;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setData(temp2);
    Store.dispatch({
      type: 'addItem',
      value: {item},
    });
    Store.dispatch({
      type: 'deleteItem',
      value: {item},
    });
    // navigation.navigate('DetailPage', {
    //   email: item,
    // });
  };

  useEffect(() => {
    console.log(Store.getState());
  }, [selectedItem]);
  return (
    <View style={styles.container}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  margin: 5,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={[
                    styles.languageText,
                    {
                      color: item.selected == true ? Colors.Blue : Colors.Black,
                    },
                  ]}>
                  {item.email}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    {
                      borderColor:
                        item.selected == true ? Colors.Blue : Colors.Black,
                    },
                  ]}
                  onPress={() => onSelect(index, item)}>
                  {item.selected === true ? (
                    <Image
                      source={require('../Assets/Images/selected.png')}
                      style={[styles.icon, {tintColor: Colors.Blue}]}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/non_selected.png')}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    flex: 1,

    backgroundColor: Colors.White,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  languageText: {
    fontSize: 16,
  },
  languageItem: {
    marginLeft: 16,
  },
});
