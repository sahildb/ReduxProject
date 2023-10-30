import React, {useState} from 'react';
import '../../i18n';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  TouchableHighlight,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Example = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState('');

  const [language, setLanguage] = useState([
    {name: 'English', selected: true},
    {name: 'हिंदी', selected: false},
  ]);
  const changeLanguage = value => {
    i18n.changeLanguage(value);
  };
  const onSelect = (index, name) => {
    const temp = language;
    setData(name);
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLanguage(temp2);
  };
  const langChange = () => {
    if (data === 'English') {
      changeLanguage('en');
    } else if (data === 'हिंदी') {
      changeLanguage('hn');
    }
    setModalVisible(!modalVisible);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: '#33A850',
          marginBottom: 10,
        }}>
        {t('hello')}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: '#33A850',
          marginBottom: 10,
        }}>
        {t('thisLineIsTranslated')}
      </Text>
      <TouchableOpacity
        style={styles.selectLangaugeBtn}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.btnSelectText}>{t('selectLanguage')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.btnText}>Login Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => navigation.navigate('register')}>
        <Text style={styles.btnText}>Register Page</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{t('selectLanguage')}</Text>
            <View style={{width: '100%'}}>
              <FlatList
                data={language}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.languageItem,
                        {
                          borderColor:
                            item.selected == true ? Colors.Blue : Colors.Black,
                        },
                      ]}
                      onPress={() => onSelect(index, item.name)}>
                      {item.selected === true ? (
                        <Image
                          source={require('../../Assets/Images/selected.png')}
                          style={[styles.icon, {tintColor: Colors.Blue}]}
                        />
                      ) : (
                        <Image
                          source={require('../../Assets/Images/non_selected.png')}
                          style={styles.icon}
                        />
                      )}

                      <Text
                        style={[
                          styles.languageText,
                          {
                            color:
                              item.selected == true
                                ? Colors.Blue
                                : Colors.Black,
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                style={styles.btnCancle}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.cancleText}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnApply}
                onPress={() => {
                  langChange();
                }}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  btnSelectText: {
    fontSize: 18,
    color: Colors.Black,
    fontWeight: '700',
  },
  selectLangaugeBtn: {
    borderWidth: 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    height: height / 3,
    backgroundColor: Colors.White,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    marginLeft: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  btnCancle: {
    backgroundColor: Colors.White,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  cancleText: {
    color: Colors.Black,
    fontSize: 18,
    fontWeight: '700',
  },
  btnApply: {
    backgroundColor: Colors.Blue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  applyText: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: '700',
  },
  btnLogin: {
    backgroundColor: Colors.Gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  btnRegister: {
    backgroundColor: Colors.Gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    color: Colors.White,
    fontWeight: '700',
  },
});
