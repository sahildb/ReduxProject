import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import socketServices from './utils/socketService';

const Chats = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    socketServices.initializeSocket();
  }, []);

  useEffect(() => {
    socketServices.on('recevied_msg', msg => {
      let cloneArray = [...data];
      setData(cloneArray.concat(msg));
    });
  }, [data]);
  const sendMsg = () => {
    if (!!message) {
      socketServices.emit('send_msg', message);
      setMessage('');
      return;
    }
    Alert.alert('Please Enter Msg...');
  };
  return (
    <View style={{backgroundColor: Colors.White, flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.chatText}>Chats</Text>
      </View>

      {data.map((val, i) => {
        return (
          <View key={i}>
            <Text style={{fontSize: 20, textAlign: 'right'}}>{val}</Text>
          </View>
        );
      })}

      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
        }}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 15,
              fontSize: RFValue(16),
              borderRadius: 10,
            }}
            value={message}
            onChangeText={val => setMessage(val)}
            placeholderTextColor={Colors.Black}
            placeholder={'Enter Text...'}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.Gray,
            padding: 18,
            marginLeft: 10,
            borderRadius: 10,
          }}
          onPress={sendMsg}>
          <Text style={{color: Colors.White, fontSize: 16, fontWeight: '900'}}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.Gray,
    height: Dimensions.get('window').width / 2.9,

    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: RFPercentage(4.5),
  },
  chatText: {
    color: Colors.White,
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
});
