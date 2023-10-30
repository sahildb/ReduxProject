import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Action = (state, action) => {
  if (typeof state === 'undefined') {
    return 'nothing!';
  }
  if (action.type === 'addItem') {
    return action.value.item;
  }
  if (action.type === 'deleteItem') {
    return state;
  }
  return state;
};

export default Action;

const styles = StyleSheet.create({});
