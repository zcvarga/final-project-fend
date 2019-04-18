// import React from 'react';
// import { MapView } from 'expo';

// export default class Map extends React.Component {
//   render() {
//     return (
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: 53.4808,
//           longitude: -2.2426,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     );
//   }
// }


import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://react360test2.herokuapp.com/home.html' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default MyWeb;


// ------------------------------

// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default class SettingsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'app.json',
//   };

//   render() {
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//     return <ExpoConfigView />;
//   }
// }
