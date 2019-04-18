import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

export default class VenueCard extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                {/* <CardItem cardBody> */}
                <CardItem button venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                    <Body>
                        <Text>{this.props.venue.name}</Text>
                    </Body>
                </CardItem>


                {/* <Image source={{ uri: this.props.venue.photo_url }} style={{ height: 200, width: null, flex: 1 }} /> */}
                {/* </CardItem> */}
            </Card>
        )
    }
};

const styles = StyleSheet.create({
    card: {
        marginLeft: 0,
        marginRight: 0,
        height: 160,
        backgroundColor: 'white',
        margin: 20,
    },
});