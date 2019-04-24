import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput } from "react-native";
import { Button, Icon } from "native-base";
import { KeyboardAvoidingView } from 'react-native';

export default class ConfirmationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester, UK'
        }
    }

    render() {
        const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fcontemporary-restaurant.jpg?alt=media&token=953bf61b-210f-4573-a08e-5e1a2c82f187'
        return (

            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={{ uri: imgSrc }} style={{ width: '100%', height: '100%' }}>
                        <View style={styles.top}>
                            <Text style={styles.text}>Thank you for your booking!</Text>
                        </View>
                    </ImageBackground>
                </View>
            </React.Fragment >

        );
    }
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 120,
        color: 'white',
        height: 100,
        width: '90%'
    },
    text: {
        color: "#B9B9B9",
        fontSize: 20
    },
    // button: {
    //     width: '90%',
    //     marginRight: '5%',
    //     marginLeft: '5%',
    //     height: 48,
    //     margin: 10,
    //     color: '#D9D9D9'
    // },
    // search: {
    //     flexDirection: 'row',
    //     width: '90%',
    //     marginRight: '5%',
    //     marginLeft: '5%',
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     height: 48,
    // },
    // icon: {
    //     backgroundColor: "white",
    //     color: '#D9D9D9',
    //     margin: 10,
    //     fontSize: 25
    // },
    // searchInput: {
    //     color: '#D9D9D9',
    //     flex: 1,
    //     fontSize: 15,
    //     margin: 10,
    // },

});