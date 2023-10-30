import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import DetailPage from './DetailPage';
// import HomePage from './HomePage';
import {Screen1Container, Screen2Container} from './Redux/Store';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1Container" component={Screen1Container} />
        <Tab.Screen name="Screen2Container" component={Screen2Container} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTabs;
