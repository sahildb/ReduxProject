import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
const DemoSecond = () => {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View></View>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={this._onDone}
      />
    </SafeAreaView>
  );
};

export default DemoSecond;

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#2D353C',
    margin: 20,
    padding: 20,
  },
});
