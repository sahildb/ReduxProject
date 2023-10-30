import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={styles.backImg}
        />
      </TouchableOpacity>

      <Text style={styles.historyText}>{props.title}</Text>
      <Image
        source={require('../../Assets/Images/login.png')}
        style={styles.loginImg}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  historyText: {
    color: Colors.Black,
    fontSize: RFValue(20),
  },
  loginImg: {
    height: 30,
    width: 30,
  },
  backImg: {
    height: 22,
    width: 22,
  },
});
