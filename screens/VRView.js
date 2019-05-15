
import React, { Component } from 'react';
import { WebView, Button, View } from 'react-native';
// import { Button } from 'native-base';

export default class VRView extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <React.Fragment>
                <WebView source={{ uri: 'https://react360test2.herokuapp.com/home.html' }} />
                <Button onPress={() => navigation.goBack()} title="Back"></Button>
            </React.Fragment>

        );
    }
}

