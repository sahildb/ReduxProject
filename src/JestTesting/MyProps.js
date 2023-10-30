import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class MyProps extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
