const axios = require('axios');

// const getData = async () => {
//   const res = await axios.get('https://reqres.in/api/users/2');
//   return res.data.data.id;
// };

const getData = async () => {
  const res = await axios.get('https://reqres.in/api/users/2');
  return res.data;
};
module.exports = {
  getData,
};
// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import axios from 'axios';

// const ApiData = () => {
//   const response = axios.get('https://reqres.in/api/users/2');

//   useEffect(() => {
//     response.then(res => {
//       console.log('res', JSON.stringify(res.data.data.id));
//     });
//   });
//   return (
//     <View>
//       <Text>ApiData</Text>
//     </View>
//   );
// };

// export default ApiData;

// const styles = StyleSheet.create({});
