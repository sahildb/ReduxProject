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
import {useNavigation, useRoute} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
let db = openDatabase({name: 'UserDatabase2.db'});
const UpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    setName(route.params.data.name);
    setEmail(route.params.data.email);
    setaddress(route.params.data.address);
  }, []);
  const updateData = () => {
    db.transaction(txt => {
      txt.executeSql(
        'UPDATE table_user set user_name=?, user_email=? , user_address=? where user_id=?',
        [name, email, address, route.params.data.id],
        (tx, res) => {
          navigation.goBack();
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
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => updateData()}>
              <Text style={styles.btnText}>Update User </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpdateUser;

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
