import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Button, Icon } from "native-base";
import { KeyboardAvoidingView } from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester'
        }
    }

    render() {
        const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fcontemporary-restaurant.jpg?alt=media&token=953bf61b-210f-4573-a08e-5e1a2c82f187'
        return (

            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={{ uri: imgSrc }} style={{ width: '100%', height: '100%' }} blurRadius={5}>
                        <View style={styles.overlay}>
                            <View style={styles.bottom}>
                                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                                    {/* <View style={styles.search}>
                                    <Icon active name='search' style={styles.icon} />
                                    <TextInput style={styles.searchInput}
                                        onChangeText={(text) => this.setState({ text })}
                                        value={this.state.text} >
                                    </TextInput>
                                </View> */}
                                    {/* <Button
                                    style={styles.buttonSignUp}
                                    block light title="Go to Main"
                                    onPress={() => this.props.navigation.navigate('Home', { search: this.state.text })}>
                                    <Text style={styles.text}>SIGN UP</Text>
                                </Button> */}

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', { search: this.state.text })}>
                                        <View style={styles.signupbutton}>
                                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Helvetica-Light' }}>CREATE AN ACCOUNT</Text>
                                        </View>
                                    </TouchableOpacity>



                                    {/* <Button
                                        style={styles.buttonLogIn}
                                        block light title="Go to Main"
                                        onPress={() => this.props.navigation.navigate('Home', { search: this.state.text })}>
                                        <Text style={styles.text}>Create an account</Text>
                                    </Button> */}
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </React.Fragment >

        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 180
    },
    buttonSignUp: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    buttonLogIn: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#113859'
    },
    text: {
        color: "white",
        fontSize: 20
    },
    search: {
        flexDirection: 'row',
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 48,
    },
    icon: {
        backgroundColor: "white",
        color: '#D9D9D9',
        margin: 10,
        fontSize: 25
    },
    searchInput: {
        color: '#D9D9D9',
        flex: 1,
        fontSize: 15,
        margin: 10,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%'
    },
    signupbutton: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 5,

    },

});