import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'UserDatabase2.db'});

const Main = () => {
  const [userList, setUserList] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM table_user', [], (tx, res) => {
        let temp = [];
        for (let i = 0; i < res.rows.length; ++i) {
          console.log(res.rows.item(i));
          temp.push(res.rows.item(i));
        }
        setUserList(temp);
      });
    });
  };
  const deleteUser = id => {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE FROM table_user where user_id=? ',
        [id],
        (tx, res) => {
          getData();
        },
      );
    });
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.userItem}>
        <Text style={styles.userText}>{'Name : ' + item.user_name}</Text>
        <Text style={styles.userText}>{'Email : ' + item.user_email}</Text>
        <Text style={styles.userText}>{'Address : ' + item.user_address}</Text>
        <View style={styles.cardView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UpdateUser', {
                data: {
                  name: item.user_name,
                  email: item.user_email,
                  address: item.user_address,
                  id: item.user_id,
                },
              })
            }>
            <Image source={require('../../Assets/Images/editUser.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteUser(item.user_id)}>
            <Image source={require('../../Assets/Images/deleteUser.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <FlatList data={userList} renderItem={renderItem} />

      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: RFValue(20),
          marginRight: RFValue(10),
        }}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('AddNewUser')}>
          <Text style={styles.btnText}>Add NEW USER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: Colors.GRAY,
    padding: RFValue(10),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
  userItem: {
    backgroundColor: Colors.GRAY,
    padding: 10,
    flex: 1,
    margin: 10,
  },
  userText: {
    color: Colors.White,
    fontSize: RFValue(18),
  },
  cardView: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
});
