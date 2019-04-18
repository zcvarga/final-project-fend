import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button, Content, Input, Item, Icon } from "native-base";

export default class HomeScreen extends React.Component {

    render() {
        const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/Images%20for%20app%2Fcontemporary-restaurant.jpg?alt=media&token=953bf61b-210f-4573-a08e-5e1a2c82f187'
        return (
            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={{ uri: imgSrc }} style={{ width: '100%', height: '100%' }}>
                        {/* <Text>Home Screen with search</Text> */}
                        <View style={styles.bottom}>
                            {/* <Content>
                                <Item regular>
                                    <Icon style={styles.icon} active name='search' />
                                    <Input style={styles.location} placeholder='Search location' />
                                </Item>
                            </Content> */}
                            <Button
                                style={styles.button}
                                block light title="Go to Main"
                                onPress={() => this.props.navigation.navigate('Main')}>
                                <Text style={styles.text}>SEARCH</Text>
                            </Button>
                        </View>
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
        margin: 10,
        color: '#D9D9D9'
    },
    text: {
        color: "white",
        fontSize: 20
    },
    icon: {
        color: "white",
    },
    location: {
        color: "white"
    }
});