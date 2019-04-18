import React, { Component } from "react";
import { View, Text, StyleSheet, Button, WebView } from "react-native";
// import { Button, Content, Input, Item, Icon } from "native-base";
import axios from 'axios';

export default class SingleView extends Component {
    _patchId = () => {
        const { navigation } = this.props;
        const venue = navigation.getParam('venue', 'NO-NAME');
        let url = 'https://projectdatabase360.herokuapp.com/api/communication'
        axios.patch(url, { patched_id: venue.restaurant_id }).then(() => {
            navigation.navigate('VR')
        })
    }


    render() {
        const { navigation } = this.props;
        const venue = navigation.getParam('venue', 'NO-NAME');
        return (<View>
            <Text>{venue.name}</Text>
            <Text>{venue.description}</Text>
            <Button onPress={() => navigation.goBack()} title="Back"></Button>
            <Button onPress={() => this._patchId(venue.restaurant_id)} title="360 view"></Button>
        </View>

        );
    }
}

const styles = StyleSheet.create({

});