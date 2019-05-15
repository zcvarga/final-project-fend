import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Content, Body, Icon } from 'native-base';

export default class VenueCard extends React.Component {
    render() {

        return (
            <Content>
                <Card style={styles.card} >
                    <CardItem cardBody button venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                        <Image source={{ uri: this.props.venue.photo_url }} style={styles.image} ></Image>
                    </CardItem>
                    <CardItem button style={styles.cardname} venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                        <Body>
                            <Text style={styles.name}>{this.props.venue.name}</Text>
                            {/* <Icon active name='star' style={styles.icon} ></Icon>
                        */}
                        </Body>
                    </CardItem>
                    <CardItem style={styles.cardaddress}>
                        <Text style={styles.address}>{this.props.venue.address}</Text>
                    </CardItem>
                    <CardItem footer style={styles.footer}>
                        <View style={styles.stars}>
                            {Array.apply(null, { length: this.props.venue.rating }).map((e, i) => (
                                <Icon active name='star' style={styles.icon} key={i}></Icon>
                            ))}
                        </View>
                    </CardItem>
                </Card>
            </Content >
        )
    }
};

const styles = StyleSheet.create({
    card: {
        marginRight: '5%',
        marginLeft: '5%',
        height: 280,
        backgroundColor: 'white',
        margin: 20,
    },
    cardname: {
        margin: 0,
        paddingLeft: 15,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom: 0
    },
    cardaddress: {
        margin: 0,
        paddingLeft: 15,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    image: {
        height: 180,
        width: '100%'
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Copperplate-Light'
    },
    address: {
        color: '#9B9B9B',
        fontSize: 12,
        fontFamily: 'Copperplate-Light'
    },
    icon: {
        fontSize: 14,
        color: '#D9D9D9',
        marginRight: -18
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    footer: {
        margin: 0,
        paddingLeft: 15,
        paddingRight: 0,
        paddingTop: 25,
        paddingBottom: 0
    }
});