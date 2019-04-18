import React from 'react';
import { Button, Image, View, Alert } from 'react-native';
import { ImagePicker } from 'expo';
import axios from 'axios';
import * as firebase from 'firebase';

export default class ImagePickerExample extends React.Component {
  state = {
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null
  };

  render() {
    console.log(this.state.image1)
    let { image1, image2, image3, image4, image5, image6 } = this.state;

    return (


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick image1 from camera roll"
          onPress={() => this._pickImage(1)}
        />
        <Button
          title="Pick image2 from camera roll"
          onPress={() => this._pickImage(2)}
        />
        <Button
          title="Pick an image3 from camera roll"
          onPress={() => this._pickImage(3)}
        />
        <Button
          title="Pick an image4 from camera roll"
          onPress={() => this._pickImage(4)}
        />
        <Button
          title="Pick an image5 from camera roll"
          onPress={() => this._pickImage(5)}
        />
        <Button
          title="Pick an image6 from camera roll"
          onPress={() => this._pickImage(6)}
        />
        <Button
          title="allow access to camera roll"
          onPress={this._alertIfCameraRollDisabledAsync}
        />
        <Button
          title="Upload photo1"
          onPress={this._uploadPhoto}
        />
        {image1 &&
          <Image source={{ uri: image1 }} style={{ width: 50, height: 50 }} />}
        {image2 &&
          <Image source={{ uri: image2 }} style={{ width: 50, height: 50 }} />}
        {image3 &&
          <Image source={{ uri: image3 }} style={{ width: 50, height: 50 }} />}
        {image4 &&
          <Image source={{ uri: image4 }} style={{ width: 50, height: 50 }} />}
        {image5 &&
          <Image source={{ uri: image5 }} style={{ width: 50, height: 50 }} />}
        {image6 &&
          <Image source={{ uri: image6 }} style={{ width: 50, height: 50 }} />}
      </View>
    );
  }

  _pickImage = async (value) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      // aspect: original,
      aspect: [16, 9],
      quality: 1.0
    });

    console.log(result);
    if (!result.cancelled) {
      switch (value) {
        case 1: this._uploadPhoto(result.uri, 'image-1').then(() => { Alert.alert('Success') }).catch((err) => { Alert.alert(err) });
          break;
        case 2: this.setState({ image2: result.uri });
          break;
        case 3: this.setState({ image3: result.uri });
          break;
        case 4: this.setState({ image4: result.uri });
          break;
        case 5: this.setState({ image5: result.uri });
          break;
        case 6: this.setState({ image6: result.uri });
          break;
      }

    }
  };

  _alertIfCameraRollDisabledAsync = async () => {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Please enable camera roll access!')
    }
  }

  _uploadPhoto = async (uri, imageName) => {
    console.log(uri)
    const response = await fetch(uri);
    // const blob = await response.blob();
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });


    const ref = firebase.storage().ref().child('Images/' + imageName);
    const metadata = {
      contentType: 'image/jpeg',
    };
    return ref.put(blob, metadata);
    // const url = `${'https://cors-anywhere.herokuapp.com/'}https://api.imgbb.com/1/upload?key=3da77bde19a86edf78e1c471fe176384`;

    // let formData = new FormData();
    // formData.append('image', uri);


    // axios
    //   .post(url, formData)
    //   .then(response => {
    //     console.log(response);
    //     if (response) console.log(response);
    //     // this.setState({ image1: response.data.data.display_url });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

}






// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { Camera, Permissions } from 'expo';

// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//   };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                   {' '}Flip{' '}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }
// }





// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Links',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         {/* Go ahead and delete ExpoLinksView and replace it with your
//            * content, we just wanted to provide you with some helpful links */}
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
