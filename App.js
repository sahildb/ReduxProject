import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import ReduxCode from './src/ReduxCode';
import DrawerNavigator from './src/DrawerNavigator';
import FlatlistPagination from './src/components/screen/FlatlistPagination';
import DatabaseNavigation from './src/Database/Navigation/DatabaseNavigation';
import Localization from './src/Localization';
import LocalizationLng from './src/LocalizationLng/LocalizationLng';
import Example from './src/LocalizationLng/screens/Example';
import NavigationTabs from './src/CheckBoxExample/NavigationTabs';
import Store from './src/CheckBoxExample/Redux/Store';
import AppTest from './src/JestTesting/AppTest';
const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      {/* <Example /> */}
      {/* <LocalizationLng /> */}
      {/* <DatabaseNavigation /> */}
      {/* <Localization /> */}
      {/* <DrawerNavigator /> */}
      {/* <FlatlistPagination /> */}
      <AppTest />
      {/* <Provider store={Store}>
        <NavigationTabs />
      </Provider> */}

      {/* <Provider store={store}>
        <ReduxCode />
      </Provider> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
