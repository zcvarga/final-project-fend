import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { Button, Icon } from "native-base";


export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester'
        }
    }

    render() {

        return (
            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={require('../assets/contemporary-restaurant.jpg')} style={{ width: '100%', height: '100%' }} blurRadius={5}>
                        <View style={styles.overlay}>
                            <View style={styles.bottom}>
                                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                                    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

                                    <TextInput
                                        style={{ color: '#D9D9D9', fontFamily: 'Helvetica-Light', fontSize: 20 }}
                                        placeholder="Email"
                                        placeholderTextColor={'#D9D9D9'}
                                        style={styles.input}
                                    />
                                    <TextInput
                                        style={{ color: '#D9D9D9', fontFamily: 'Helvetica-Light', fontSize: 20 }}
                                        placeholder="Password"
                                        placeholderTextColor={'#D9D9D9'}
                                        style={styles.input}
                                        secureTextEntry={true}
                                    />

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', { search: this.state.text })}>
                                        <View style={styles.loginbutton}>
                                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Helvetica-Light' }}>LOGIN</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.forgotpassword}>Forgot password?</Text>
                                    {/* </TouchableWithoutFeedback> */}
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
    loginbutton: {
        backgroundColor: '#113859',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 5,

    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%'
    },
    input: {
        height: 40,
        borderColor: "#D9D9D9",
        borderBottomWidth: 2,
        marginBottom: 36,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        color: '#D9D9D9',
        fontFamily: 'Helvetica-Light',
        fontSize: 20
    },
    forgotpassword: {
        fontFamily: 'Helvetica-Light',
        fontSize: 12,
        color: '#D9D9D9',
        marginTop: 15,
        width: '100%',
        textAlign: 'center',
    },
    container: {

    },
    or: {
        fontFamily: 'Helvetica-Light',
        fontSize: 15,
        color: '#D9D9D9',
        marginTop: 15,
        width: '100%',
        textAlign: 'center',
    },
    line: {
        width: '100%',
        color: '#D9D9D9',
        height: 1,
    }
});





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

{/* <Button
                                    style={styles.buttonLogIn}
                                    block light title="Go to Main"
                                    onPress={() => this.props.navigation.navigate('Home', { search: this.state.text })}>
                                    <Text style={styles.text}>LOGIN</Text>
                                </Button> */}