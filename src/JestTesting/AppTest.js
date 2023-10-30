//simple function component //
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const AppTest = () => {
//   return (
//     <View>
//       <Text>AppTest Add</Text>
//     </View>
//   );
// };

// export default AppTest;

// import React from 'react';
// import {View, Text} from 'react-native';

// export function myFunction(a, b) {
//   return a + b;
// }

// const AppTest = () => {
//   return (
//     <View>
//       <Text>AppTest</Text>
//     </View>
//   );
// };

// export default AppTest;

// simple class function //
// import {Text, View} from 'react-native';
// import React, {Component} from 'react';

// export class AppTest extends Component {
//   render() {
//     return (
//       <View>
//         <Text>AppTest</Text>
//       </View>
//     );
//   }
// }

// export default AppTest;

//function testing
// import {Text, View} from 'react-native';
// import React, {Component} from 'react';

// export class AppTest extends Component {
//   getData(x) {
//     return x + 10;
//   }
//   render() {
//     return (
//       <View>
//         <Text>AppTest</Text>
//       </View>
//     );
//   }
// }

// export default AppTest;
//const styles = StyleSheet.create({});
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import MyProps from './MyProps';

export default class AppTest extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }

  getData(x) {
    this.setState({counter: this.state.counter + x});
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>{this.state.counter}</Text>
        <MyProps name={'sahil'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
