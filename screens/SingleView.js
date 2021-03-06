import React, { Component } from "react";
import { View, Text, StyleSheet, WebView, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon, Button, Left, Right } from "native-base";
import axios from 'axios';

export default class SingleView extends Component {

    state = {
        table_id: 0,
    }
    _patchId = () => {
        const { navigation } = this.props;
        const venue = navigation.getParam('venue', 'NO-NAME');
        let url = 'https://projectdatabase360.herokuapp.com/api/communication'
        axios.patch(url, { patched_id: venue.restaurant_id }).then(() => {
            navigation.navigate('VR')
        })
    }
    _tableWatcher = () => {

        let url = 'https://projectdatabase360.herokuapp.com/api/communication'
        axios.get(url).then((res) => {
            this.setState({ table_id: res.data.id.patched_table_id })
            // console.log(res.data.id.patched_table_id)
        })
    }




    componentDidMount() {
        this._tableWatcher()
    }
    componentDidUpdate(_, prevState) {
        const { navigation } = this.props;
        const venue = navigation.getParam('venue', 'NO-NAME');
        if (prevState.table_id === this.state.table_id) this._tableWatcher()
        else navigation.navigate('Date', { table_id: this.state.table_id, restaurant_id: venue.restaurant_id, name: venue.name, photo: venue.photo_url })

    }



    render() {
        console.log('TABLE', this.state.table_id)
        const { navigation } = this.props;
        const venue = navigation.getParam('venue', 'NO-NAME');

        return (
            <View style={styles.page}>

                {/* <Button style={styles.backlink} onPress={() => navigation.goBack()} title="Back"></Button> */}
                <ImageBackground source={{ uri: venue.photo_url }} style={styles.image}  >
                    <Icon name='arrow-back' style={styles.back} onPress={() => navigation.goBack()} />
                </ImageBackground>
                <Content padder>
                    <Card transparent>
                        <CardItem header style={styles.header}>
                            <Left>
                                <Text style={styles.name}>{venue.name}</Text>
                            </Left>
                            <Right>
                                <TouchableOpacity onPress={() => this._patchId(venue.restaurant_id)}>
                                    <View style={styles.loginbutton}>
                                        <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Helvetica-Light', paddingLeft: '5%', paddingRight: '5%' }}>RESERVE</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <Icon active name='eye' title="360 view" style={styles.icon} onPress={() => this._patchId(venue.restaurant_id)}></Icon> */}

                                {/* <Button iconLeft style={styles.button} onPress={() => this._patchId(venue.restaurant_id)} title="360 view"> */}
                                {/* <Icon name='eye' /> */}
                                {/* <Text style={styles.text}>360 View</Text> */}
                                {/* </Button> */}
                            </Right>
                        </CardItem>
                        <CardItem style={styles.container}>
                            <View style={styles.line}></View>
                            <Text style={styles.description}>Description</Text>
                            <View style={styles.line}></View>
                        </CardItem>
                        <CardItem >
                            <Body>
                                <Text style={styles.overview}>{venue.description}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <View style={styles.footer} >
                    <View style={styles.stars} >
                        {Array.apply(null, { length: venue.rating }).map((e, i) => (
                            <Icon active name='star' style={styles.iconStar} key={i}></Icon>
                        ))}
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: '100%',
        resizeMode: 'cover'
    },
    page: {
        width: '100%',
        height: '100%'
    },
    name: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Copperplate-Light',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        width: '70%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    text: {
        color: "white",
        fontSize: 18
    },
    icon: {
        fontSize: 60,
        color: '#D9D9D9'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 0

    },
    line: {
        backgroundColor: '#D9D9D9',
        height: 1.5,
        width: '35%'
    },

    description: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Helvetica-Light'
    },
    overview: {
        fontSize: 14,
        color: '#B9B9B9',
        textAlign: 'justify',
        fontFamily: 'Helvetica-Light'
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 30,
        height: 30,
        width: 30,
        color: 'white'
    },
    footer: {
        backgroundColor: '#D9D9D9',
        paddingBottom: 0,
        width: '100%',
        height: 50
    },
    iconStar: {
        fontSize: 14,
        color: 'white',
        margin: 2,

    },
    stars: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20

    },
    loginbutton: {
        backgroundColor: '#113859',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '95%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 40,
        margin: 5,

    }
});