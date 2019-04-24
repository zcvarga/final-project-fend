import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

export default class HeaderBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
        }
    }
    render() {
        let imgSrc = 'https://firebasestorage.googleapis.com/v0/b/react-native-dev-f4b63.appspot.com/o/reserv3d%20(trans_white).png?alt=media&token=c4660bdf-42a4-4b7c-8eed-973f5e8417d0'
        return (


            <View style={styles.header}>
                <Image source={{ uri: imgSrc }} style={{ height: 35, width: '40%' }}></Image>
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
        marginBottom: -15,
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingRight: 5
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
