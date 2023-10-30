import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
let db = openDatabase({name: 'UserDatabase2.db'});
const AddNewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(50), user_address VARCHAR(255))',
              [],
            );
          } else {
            console.log('already created tabale');
          }
        },
      );
    });
  }, []);

  const saveData = () => {
    console.log('...');
    db.transaction(txn => {
      txn.executeSql(
        ' INSERT INTO  table_user( user_name, user_email, user_address )VALUES (?,?,?) ',
        [name, email, address],
        (txt, res) => {
          if (res.rowsAffected == 1) {
            navigation.goBack();
          } else {
            console.log('res', res);
          }
        },
        error => {
          console.log('e', error);
        },
      );
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.card, styles.elevationBox]}>
        <View style={{padding: 20}}>
          <Text style={styles.nameText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Name "
            placeholderTextColor={Colors.Black}
            value={name}
            onChangeText={val => setName(val)}
            autoCapitalize="none"
          />
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Email "
            placeholderTextColor={Colors.Black}
            value={email}
            onChangeText={val => setEmail(val)}
            autoCapitalize="none"
          />
          <Text style={styles.passwordText}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Address"
            placeholderTextColor={Colors.Black}
            value={address}
            onChangeText={val => setaddress(val)}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.btnAdd} onPress={() => saveData()}>
              <Text style={styles.btnText}>Save Data </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddNewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY,
  },

  input: {
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    padding: RFValue(15),
    marginTop: RFValue(10),
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    width: RFPercentage(20),

    padding: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
  card: {
    width: width - 40,
    borderRadius: RFValue(20),

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowRadius: 1,
    backgroundColor: 'white',
  },
  elevationBox: {
    elevation: 50,
    shadowColor: Colors.Black,
  },
  nameText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    marginTop: RFValue(10),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  passwordText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    marginTop: RFValue(10),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  signupText: {
    color: Colors.Black,
    fontWeight: 'bold',
    color: Colors.GRAY,
  },
});
