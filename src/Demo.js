import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-simple-slider';

const Demo = () => {
  const data = [
    {
      name: 'Worst',
      emoji: require('./Assets/Images/Worst.png'),
    },
    {
      name: 'Not Good',
      emoji: require('./Assets/Images/NotGood.png'),
    },
    {
      name: 'Fine',
      emoji: require('./Assets/Images/Neutral.png'),
    },
    {
      name: 'Awesome',
      emoji: require('./Assets/Images/GoodStyle.png'),
    },
  ];

  const handleEmojiPress = index => {
    let sliderValue;
    if (index === 0) {
      sliderValue = 0.1;
    } else if (index === 1) {
      sliderValue = 0.35;
    } else if (index === 2) {
      sliderValue = 0.63;
    } else if (index === 3) {
      sliderValue = 0.9;
    }

    setSliderValue(sliderValue);
  };

  const sliderMaxValue = 1; // Maximum slider value is now 1

  const [sliderValue, setSliderValue] = useState(0.1); // Initialize the slider value

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', marginBottom: 50}}>
        {data.map((res, index) => {
          return (
            <View style={{marginHorizontal: 10}} key={index}>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => handleEmojiPress(index)}>
                  <Image source={res.emoji} style={{height: 50, width: 50}} />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>{res.name}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <Slider
        value={sliderValue}
        min={0.1}
        max={sliderMaxValue}
        disabledHoverEffect={false}
      />
    </SafeAreaView>
  );
};

export default Demo;

const styles = StyleSheet.create({});
