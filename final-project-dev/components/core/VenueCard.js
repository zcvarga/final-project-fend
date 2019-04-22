import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

export default class VenueCard extends React.Component {
    render() {

        return (
            <Card style={styles.card} >
                <CardItem cardBody >
                    <Image source={{ uri: this.props.venue.photo_url }} style={styles.image}></Image>
                </CardItem>
                <CardItem button venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                    <Body>
                        <Text style={styles.name}>{this.props.venue.name}</Text>
                        <Text style={styles.address}>{this.props.venue.address}</Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
};

const styles = StyleSheet.create({
    card: {
        marginLeft: 0,
        marginRight: 0,
        height: 280,
        backgroundColor: 'white',
        margin: 20,
    },
    image: {
        height: 180,
        width: '100%'
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'HelveticaNeue-Light'
    },
    address: {
        color: '#9B9B9B',
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Light'
    }
});