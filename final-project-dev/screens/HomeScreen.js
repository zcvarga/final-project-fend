import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, KeyboardVerticalOffset } from "react-native";
import { List, ListItem, Left, Button, Icon, Thumbnail } from "native-base";
import { Avatar } from 'react-native-elements';




export default class HomeScreen extends React.Component {
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

                        <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === 'ios') ? "padding" : null} enabled keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}>
                            <View style={styles.overlay}>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <View style={styles.bottom}>
                                        <View style={styles.avatar}>
                                            <Avatar
                                                rounded
                                                size="large"
                                                source={{
                                                    uri:
                                                        'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fdownload-person.jpeg?alt=media&token=c28e754c-50fe-4e36-9f31-aaf0fa993e20',
                                                }}
                                            />
                                            <Text style={styles.name}>Hi, Felix</Text>
                                        </View>
                                        <View style={styles.welcome}>
                                            <Text style={styles.text1}>Where would you </Text>
                                            <Text style={styles.text1}>like to go today?</Text>
                                        </View>
                                        <View style={styles.search}>
                                            <Icon active name='search' style={styles.icon} />
                                            <TextInput style={styles.searchInput}
                                                onChangeText={(text) => this.setState({ text })}
                                                value={this.state.text} >
                                            </TextInput>
                                        </View>

                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main', { search: this.state.text })}>
                                            <View style={styles.searchbutton}>
                                                <Text style={{ color: 'white', fontSize: 20 }}>SEARCH</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </KeyboardAvoidingView>
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
        marginBottom: 120
    },
    button: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 10,
        color: '#D9D9D9'
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
        height: 56,
    },
    icon: {
        backgroundColor: "white",
        color: '#D9D9D9',
        margin: 14,
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
    welcome: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 150
    },
    text1: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Helvetica-Light'
    },
    avatar: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: 30,
        marginLeft: 20
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Helvetica-Light',
        marginLeft: '5%',

    },
    searchbutton: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 10,
        color: '#D9D9D9'
    }


});