import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Button, Icon, Card, CardItem, Content, Left, Thumbnail, Body } from "native-base";
import { KeyboardAvoidingView } from 'react-native';
import axios from 'axios'

export default class ConfirmationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester'
        }
    }

    _patchAndBrowse = () => {
        const { navigation } = this.props;
        const url = 'https://projectdatabase360.herokuapp.com/api/communication';
        axios.patch(url, { "patched_table_id": 0 }).then(() => {

            navigation.navigate('Main')

        })
    }

    render() {
        const { navigation } = this.props;
        const table = navigation.getParam('table', 'NO-NAME');
        const name = navigation.getParam('name', 'NO-NAME');
        const time = navigation.getParam('time', 'NO-NAME');
        const date = navigation.getParam('date', 'NO-NAME');
        const photo = navigation.getParam('photo', '')
        return (

            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={require('../assets/contemporary-restaurant.jpg')} style={{ width: '100%', height: '100%' }} blurRadius={5}>
                        <View style={styles.overlay}>
                            <View style={styles.top}>
                                <Text style={{ fontFamily: 'Helvetica-Light', color: 'white', fontSize: 24 }}>Thank you for your booking!</Text>
                            </View>
                            <Content style={{ marginTop: 25, marginLeft: '5%', marginRight: '5%', }}>
                                <Card style={{ width: '100%', heigth: 450, }}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fdownload-person.jpeg?alt=media&token=c28e754c-50fe-4e36-9f31-aaf0fa993e20' }} />
                                            <Body>
                                                <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 22 }}>Your booking details:</Text>
                                                {/* <Text note>April 25, 2019</Text> */}
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>
                                            <Image source={{ uri: photo }} style={{ height: 150, width: '100%', flex: 1 }} />

                                        </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Left>
                                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 16 }}>
                                                    Restaurant: {name}
                                                </Text>
                                                <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 16 }}>
                                                    Table: {table}
                                                </Text>
                                                <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 16 }}>
                                                    Date: {date}
                                                </Text>
                                                <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 16 }}>
                                                    Time: {time} pm
                                                </Text>
                                            </View>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </Content>
                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={() => { navigation.navigate('VR') }}>
                                    <View style={styles.cancelSmall}>
                                        <Text style={{ color: 'white' }}>BACK TO 360°</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this._patchAndBrowse() }}>
                                    <View style={styles.confirm}>
                                        <Text style={{ color: 'white' }}>CONTINUE BROWSING</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <Button onPress={() => { this._cancelBooking() }} title="Cancel" /> */}
                                {/* <Button style={styles.button} title="Confirm booking" onPress={() => { this._patchConfirm() }} /> */}
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </React.Fragment >

        );
    }
}

const styles = StyleSheet.create({
    top: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 0,
        color: 'white',
        // height: 100,
        width: '100%',
        height: 30
    },
    text: {
        color: "#B9B9B9",
        fontSize: 20
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%'
    },
    buttons: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%'

    },

    cancelSmall: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 150,
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    confirm: {
        backgroundColor: '#113859',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 150,
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    }

});