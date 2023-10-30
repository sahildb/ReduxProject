import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../Colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { productList, searchProduct } from '../redux/productAction';

const Header = () => {
  const navigation = useNavigation();
  const result = useSelector(state => state.cartData);
  {
    //console.log('result', result);
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productList());
  }, []); 
  const handleSearch =(param) =>{
    dispatch(searchProduct({
      q:param
    }))
  }
  // useEffect(() => {
  //   dispatch( searchProduct({q:'black'}))
  // })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.imgLogo}
          onPress={() => navigation.navigate('main')}>
          E-Com
        </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            placeholder="Search Product"
            placeholderTextColor={Colors.White}
            onChangeText={(text) =>handleSearch(text)}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image
            source={require('../Assets/Images/cart.png')}
            style={styles.img}
          />
          <View style={styles.cricle}>
            <Text style={styles.num}>{result.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(40),
  },
  header: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY,
    padding: RFValue(30),
  },
  num: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  cricle: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 30,
    right: -18,
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
  },
  img: {
    //marginHorizontal: 6,
    position: 'relative',
    top: -12,
    right:-12,
    height:30,
    width:30
  },
  imgLogo: {
    position: 'absolute',
    right: RFValue(264),
    color: Colors.White,
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  input: {
    width:RFPercentage(25),
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.White,
    color: Colors.White,
  },
  textInput:{
    position:"absolute",
    left:120
  }
});
