import 'react-native';
import React from 'react';
import AppTest from '../src/JestTesting/AppTest';
import {myFunction} from '../src/JestTesting/AppTest';
import renderer from 'react-test-renderer';
import TestFunction from '../src/JestTesting/TestFunction';
import MyProps from '../src/JestTesting/MyProps';
const axios = require('axios');
const {getData} = require('../src/JestTesting/ApiData');
//snapshot case
test('renders correctly', () => {
  const snapshot = renderer.create(<AppTest />).toJSON();
  console.log('snapshot', snapshot);
  expect(snapshot).toMatchSnapshot();
});

// test('myFunction should add two numbers', () => {
//   //Arrange;
//   const a = 3;
//   const b = 4;

//   // Act
//   const result = myFunction(a, b);

//   // Assert
//   expect(result).toBe(7);
// });
// funcation;
// test('funcation testing', () => {
//   const AppRef = renderer.create(<AppTest />).getInstance();
//   expect(AppRef.getData(2)).toBe(12);
//   const input = AppRef.getData(2);
//   console.log('i', input);
// });

//state
// test('state testing', () => {
//   const AppRef = renderer.create(<AppTest />).getInstance();
//   AppRef.getData(2);
//   expect(AppRef.state.counter).toBe(2);
// });

//props
// test('funcation testing', () => {
//   const AppRef = renderer.create(<MyProps name={'sahil'} />).getInstance();
//   expect(AppRef.props.name).toBe('sahil');
// });

//global function
// describe('function testing directly', () => {
//   test('global function testing', () => {
//     const input = TestFunction(3);
//     const output = 30;
//     expect(input).toBe(output);
//   });
// });

//api test
// it('fetch user', async () => {
//   const apiData = await getData();
//   expect(apiData).toBe(2);
// });

//check full data of api
// it('fetch user', async () => {
//   const apiData = await getData();
//   console.log('apiData', apiData);
//   let data = {
//     data: {
//       avatar: 'https://reqres.in/img/faces/2-image.jpg',
//       email: 'janet.weaver@reqres.in',
//       first_name: 'Janet',
//       id: 2,
//       last_name: 'Weaver',
//     },
//     support: {
//       text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
//       url: 'https://reqres.in/#support-heading',
//     },
//   };
//   expect(apiData).toEqual(data);
// });

//.toBe() is used to evaluate primitives like strings, numbers, or booleans.
//.toEqual() is used to evaluate objects
