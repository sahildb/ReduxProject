import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AppExample = () => {
  const btnPress = () => {
    console.log('hello');
  };
  return (
    <View>
      <Text>AppExample</Text>
      <TouchableOpacity onPress={btnPress}>
        <Text> hii</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppExample;

const styles = StyleSheet.create({});
