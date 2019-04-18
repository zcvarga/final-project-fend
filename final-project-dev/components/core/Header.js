import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester, UK'
        }
    }
    render() {
        return (
            <React.Fragment>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput style={styles.searchInput}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text} />
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 160,
        backgroundColor: '#113859',
    },
    search: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 48,
        position: 'relative',
        bottom: -60
    },
    searchInput: {
        color: '#9B9B9B',
        flex: 1,
        fontSize: 15,
        margin: 10
    },
});