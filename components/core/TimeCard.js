import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Content, Body, Icon } from 'native-base';

export default class TimeCard extends React.Component {
    render() {

        return (
            <Content>
                <Card style={styles.card} >
                    <CardItem cardBody button venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                        < Text key={index}> {!index ? '12 am' : `${index} pm`}</Text>
                    </CardItem>
                    {/* <CardItem button style={styles.cardname} venue={this.props.venue} onPress={() => this.props.navigation.navigate('Single', { venue: this.props.venue })}>
                        <Body>
                            <Text style={styles.name}>{this.props.venue.name}</Text> */}
                    {/* <Icon active name='star' style={styles.icon} ></Icon>
                        */}
                    {/* </Body>
                    </CardItem> */}
                </Card>
            </Content >
        )
    }
};

const styles = StyleSheet.create({
    card: {
        // marginRight: '5%',
        // marginLeft: '5%',
        height: 20,
        width: 50,
        backgroundColor: 'white',
        margin: 20,
    },
    // cardname: {
    //     margin: 0,
    //     paddingLeft: 15,
    //     paddingRight: 0,
    //     paddingTop: 10,
    //     paddingBottom: 0
    // },
    // cardaddress: {
    //     margin: 0,
    //     paddingLeft: 15,
    //     paddingRight: 0,
    //     paddingTop: 0,
    //     paddingBottom: 0
    // },
    // image: {
    //     height: 180,
    //     width: '100%'
    // },
    // name: {
    //     color: 'black',
    //     fontSize: 18,
    //     fontFamily: 'Copperplate-Light'
    // },
    // address: {
    //     color: '#9B9B9B',
    //     fontSize: 12,
    //     fontFamily: 'Copperplate-Light'
    // },
    // icon: {
    //     fontSize: 14,
    //     color: '#D9D9D9',
    //     marginRight: -18
    // },
    // stars: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',

    // },
    // footer: {
    //     margin: 0,
    //     paddingLeft: 15,
    //     paddingRight: 0,
    //     paddingTop: 25,
    //     paddingBottom: 0
    // }
});