/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import api from './src/redux/api';
import {name as appName} from './app.json';
import Demo from './src/Demo';
import DemoSecond from './DemoSecond';

AppRegistry.registerComponent(appName, () => DemoSecond);
