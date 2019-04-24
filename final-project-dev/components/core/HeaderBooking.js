import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class HeaderBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
        }
    }
    render() {
        return (


            <View style={styles.header}>
                {/* <View style={styles.search}>
                            <TextInput style={styles.searchInput}

                                onChangeText={(text) => this.setState({ text })}
                                value={!this.state.text ? this.props.search : this.state.text} />
                        </View> */}
            </View>)


    }
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#113859',
        marginBottom: -15
    },
    // search: {
    //     width: '90%',
    //     marginRight: '5%',
    //     marginLeft: '5%',
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     height: 48,
    //     position: 'relative',
    //     bottom: -60
    // },
    // searchInput: {
    //     color: '#9B9B9B',
    //     flex: 1,
    //     fontSize: 15,
    //     margin: 10
    // },
});
