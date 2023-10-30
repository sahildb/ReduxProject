import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from './Header';
import {useSelector} from 'react-redux';
import { buyNow, remove_Item} from '../redux/action';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from '../Colors';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const CartDetails = () => {
  const cartData = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <ScrollView style={{marginBottom:RFValue(120)}}>
        <View>
          {cartData.map((item, index) => {
            return (
              <View key={index} style={styles.box}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={{uri: item.photo}} style={styles.img} />
                  </View>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.itemText}>Name: {item.name} </Text>
                      <Text style={styles.itemText}>Color: {item.color}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.itemText}>Brand: {item.brand}</Text>
                      <Text style={styles.itemText}>Price: {item.price}</Text>
                    </View>
                    <Text style={styles.itemText}>
                      Category: {item.category}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => dispatch(remove_Item(index))}>
                        <Text style={styles.RemoveToCartText}>
                          Remove To Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  Name: {
    fontSize: RFValue(22),
  },
  box: {
    borderWidth: 2,
    borderColor: Colors.Black,
    margin: 10,
  },
  img: {
    height: RFPercentage(15),
    width: RFPercentage(14),
    margin: 10,
  },
  itemText: {
    fontSize: RFValue(16),
    marginTop: RFValue(5),
    marginEnd: RFValue(5),
  },
  carbtnRemove: {
    backgroundColor: Colors.Dark_Gray,
  },
  btn: {
    backgroundColor: Colors.Dark_Gray,
    padding: RFValue(5),
    marginVertical: RFValue(10),
  },
  btnBuy: {
    backgroundColor: Colors.Dark_Gray,
    padding: RFValue(5),
    marginVertical: RFValue(10),
    marginEnd: RFValue(10),
  },
  RemoveToCartText: {
    alignSelf: 'center',
  },
  buyNowText: {
    alignSelf: 'center',
  },
});
