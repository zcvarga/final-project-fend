import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import MyWeb from './SettingsScreen';
import Map from './SettingsScreen';
import axios from 'axios';
import { createStackNavigator, createAppContainer, NavigationEvents } from 'react-navigation';





export default class HomeScreen extends React.Component {
  state = {
    restaurants: []
  }
  static navigationOptions = {
    header: null,
  };

  _getRestaurants = () => {
    let url = 'https://projectdatabase360.herokuapp.com/api/restaurants'
    axios.get(url).then(({ data: { restaurants } }) => {
      this.setState({ restaurants })
    }).catch((err) => { console.log(err) })
  }

  componentDidMount() {
    this._getRestaurants()
  }




  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate)
    const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fcontemporary-restaurant.jpg?alt=media&token=953bf61b-210f-4573-a08e-5e1a2c82f187'
    return (

      // <View style={styles.container}>

      <View style={{ flex: 1, flexDirection: 'column' }} >
        <ImageBackground source={{ uri: imgSrc }} style={{ width: '100%', height: '100%' }}>
          <Button title="Search" onPress={() => navigate('MainScreen')} />
        </ImageBackground>
        <View style={styles.overlay} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        </View>
      </ View>



      // {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      //   <View><Text>{this.state.restaurants.map(restaurant => restaurant.name)}</Text></View>
      //   <View style={styles.helpContainer}>
      //     <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
      //       <Text style={styles.helpLinkText}>HI TOMASZ</Text>
      //     </TouchableOpacity>
      //   </View>

      // </ScrollView> */}
      // {/* 
      //     <View style={styles.tabBarInfoContainer}>
      //       <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

      //       <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
      //         <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
      //       </View>
      //     </View>
      //   </View> */}
    );
  }




  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});


