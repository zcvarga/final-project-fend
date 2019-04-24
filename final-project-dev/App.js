import React from 'react';
import HomeScreen from './screens/HomeScreen'// should set the proper path.
import MainScreen from './screens/MainScreen'
import SingleView from './screens/SingleView'
import VRView from './screens/VRView'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import BookingScreen from './screens/BookingScreen'
import ConfirmationScreen from './screens/ConfirmationScreen';


const MainNavigator = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LogInScreen },
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen },
  Single: { screen: SingleView },
  VR: { screen: VRView },
  Date: { screen: BookingScreen },
  Confirmation: { screen: ConfirmationScreen }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const App = createAppContainer(MainNavigator);

export default App;
