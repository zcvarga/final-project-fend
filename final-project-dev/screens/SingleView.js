import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { Button, Content, Input, Item, Icon } from "native-base";

export default class SingleView extends Component {

    render() {
        const { navigation } = this.props;

        const venue = navigation.getParam('venue', 'NO-NAME');
        return (<View>
            <Text>{venue.name}</Text>
            <Text>{venue.description}</Text>
            <Button onPress={() => navigation.goBack()} title="Back"></Button>
            <Button onPress={() => this._webView()}></Button>
        </View>

        );
    }
}

const styles = StyleSheet.create({

});