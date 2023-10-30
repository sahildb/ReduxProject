import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
const {width, height} = Dimensions.get('window');
const LangaugeModal = ({
  langmodalVisible,
  setLangModalVisible,
  onSelectLang,
}) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [language, setLanguage] = useState([
    {name: 'English', selected: true},
    {name: 'हिंदी', selected: false},
    {name: 'ਪੰਜਾਬੀ', selected: false},
    {name: 'தமிழ்', selected: false},
    {name: 'اردو', selected: false},
  ]);

  const onSelect = index => {
    const temp = language;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
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
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langmodalVisible}
      onRequestClose={() => {
        setLangModalVisible(!langmodalVisible);
        onSelectLang(selectedLang);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select Langauge</Text>
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
                    onPress={() => onSelect(index)}>
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
                            item.selected == true ? Colors.Blue : Colors.Black,
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
                setLangModalVisible(false);
              }}>
              <Text style={styles.cancleText}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnApply}
              onPress={() => {
                setLangModalVisible(false);
                onSelectLang(selectedLang);
              }}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LangaugeModal;

const styles = StyleSheet.create({
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
    height: height / 1.83,
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
    width: '40%',
    height: 50,
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
    width: '40%',
    height: 50,
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
});
