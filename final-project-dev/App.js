import React from 'react';
import HomeScreen from './screens/HomeScreen'// should set the proper path.
import MainScreen from './screens/MainScreen'
import SingleView from './screens/SingleView'
import VRView from './screens/VRView'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import { DatePicker } from 'native-base';


const MainNavigator = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LogInScreen },
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen },
  Single: { screen: SingleView },
  VR: { screen: VRView },
  Date: { screen: DatePicker }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const App = createAppContainer(MainNavigator);

export default App;
