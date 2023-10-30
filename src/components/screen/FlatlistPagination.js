import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Colors from '../../Colors';

let limit = 20;
let loadMore = true;
const FlatlistPagination = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let query = `?skip=${skip}&limit=${limit}`;
    fetch('https://dummyjson.com/products' + query)
      .then(res => res.json())
      .then(res => {
        if (res.products.length == 0) {
          loadMore = false;
        }
        setData([...data, ...res.products]);
        setSkip(skip + 20);
        setIsLoader(false);
      });
  };
  const renderItem = useCallback(({item}) => {
    // console.log('i', item);
    return (
      <View style={styles.flatStyle}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Brand : {item.brand}</Text>
          <Text>Price : {item.price}</Text>
        </View>
      </View>
    );
  }, []);
  const keyExtractor = useCallback(item => `${item.id}`);
  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [data]);
  const onEndReached = () => {
    if (loadMore) {
      setIsLoader(true);
      fetchData();
    }
  };
  const ListFooterComponent = useCallback(() => {
    return <ActivityIndicator size={'large'} style={{marginVertical: 10}} />;
  }, []);
  return (
    <View style={{marginHorizontal: 20}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        onEndReached={onEndReached}
        ListFooterComponent={isLoader && ListFooterComponent}
      />
    </View>
  );
};

export default FlatlistPagination;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  flatStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: Colors.White,
    padding: 8,
    margin: 2,
    borderRadius: 8,
  },
});
