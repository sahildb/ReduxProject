import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import Colors from '../Colors'; 
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {addToCart, empty, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {productList} from '../redux/productAction';
import Header from './Header';
const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData);
  
  console.log('data in  main component from saga', data);
  const [productData, setProductData] = useState(data)
  useEffect(() => {
    dispatch(productList());
  }, []); 

  // useEffect(() => {
  //   const product = data 
  //   setProductData(product)
  //   console.log("product",product);
  // },[data])

  renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.item}>
        <View>
          <Image source={{uri: item.photo}} style={styles.img} />
        </View>
        <View>
          <Text style={styles.itemText}>Name : {item.name} </Text>
          <Text style={styles.itemText}>Price : {item.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.carbtnAdd}
          onPress={() => {
            dispatch(addToCart(item))}}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.item}>
        <Image source={{uri: item.photo}} style={styles.img} />
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text style={styles.itemText}>Color: {item.color}</Text>
        <Text style={styles.itemText}>Brand: {item.brand}</Text>
        <Text style={styles.itemText}>Category: {item.category}</Text>
        <Text style={styles.itemText}>Price: {item.price}</Text>
        <TouchableOpacity
          style={styles.carbtnAdd}
          onPress={() => dispatch(addToCart(item))}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.carbtnRemove}
          onPress={() => dispatch(removeFromCart(item.id))}>
          <Text style={styles.addToCartText}>Remove to Cart</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
  return (
    <View>
      <Header />
      {/* <View style={{marginHorizontal: RFValue(20)}}>
          <TouchableOpacity 
            style={styles.btnEmpty}
            onPress={() => dispatch(empty())}>
            <Text style={styles.cartText}>Empty Cart </Text>
          </TouchableOpacity>
        </View> */}
      <View style={styles.cartView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 400}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(0),
  },

  btnEmpty: {
    backgroundColor: Colors.Dark_Gray,
    padding: RFValue(10),
    width: RFPercentage(22),
    marginTop: RFValue(20),
  },

  carbtnAdd: {
    backgroundColor: Colors.GRAY,
    padding: RFValue(5),
    marginTop: RFValue(10),
  },
  carbtnRemove: {
    backgroundColor: Colors.Dark_Gray,
    padding: RFValue(5),
  },
  cartText: {
    fontSize: RFValue(14),
    alignSelf: 'center',
  },

  itemText: {
    fontSize: RFValue(16),
   
    color: Colors.Black,
    marginVertical: RFValue(5),
    marginLeft:RFValue(3),
    
  },
  addToCartText: {
    color: Colors.White,
    alignSelf: 'center',
    fontWeight:"bold",
  },
  img: {
    height: 170,
    width: 170,
    // margin:20,
    alignSelf: 'center',
    borderRadius: 20,
  },

  item: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cartView: {
    alignItems: 'center',
    marginTop: RFValue(20),
  },
});
