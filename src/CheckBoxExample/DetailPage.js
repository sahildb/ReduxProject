import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';

const DetailPage = ({selectedItem}) => {
  // useEffect(() => {
  //   let eventListner = EventRegister.addEventListener('click', data => {
  //     console.log(data, '....');

  //     setData(data);
  //   });
  //   return () => {
  //     EventRegister.removeEventListener(eventListner);
  //   };
  // });
  return (
    <View>
      <Text>{selectedItem.email}</Text>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({});
