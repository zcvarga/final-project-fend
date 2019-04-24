import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Left } from 'native-base';
import axios from 'axios';
import HeaderBooking from '../components/core/HeaderBooking';
import VenueCard from '../components/core/VenueCard';
import BookingPicker from '../components/core/Picker'

export default class MainScreen extends React.Component {
    // state = {
    //     restaurants: []
    // }
    // _getRestaurants = () => {
    //     let url = 'https://projectdatabase360.herokuapp.com/api/restaurants'
    //     axios.get(url).then(({ data: { restaurants } }) => {
    //         this.setState({ restaurants })
    //     }).catch((err) => { console.log(err) })
    // }

    // componentDidMount() {
    //     this._getRestaurants();
    // }
    render() {
        const { navigation } = this.props;
        const table_id = navigation.getParam('table_id', '');
        console.log(table_id)
        const restaurant_id = navigation.getParam('restaurant_id', '');
        const name = navigation.getParam('name', '')
        return (
            <Container style={styles.container}>
                <HeaderBooking />
                {/* <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Nearby"> */}
                <ScrollView style={styles.cardContainer}>
                    <BookingPicker table_id={table_id} restaurant_id={restaurant_id} name={name} navigation={navigation} />
                </ScrollView>
                {/* </Tab>
                    <Tab heading="Popular">
                    </Tab>
                    <Tab heading="Top rated">
                        <ScrollView style={styles.cardContainer}> */}
                {/* {this.state.restaurants.sort(function (a, b) {
                                return b.rating - a.rating;
                            }).map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)} */}
                {/* </ScrollView>
                    </Tab> */}
                {/* </Tabs> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#F5F5F8',

        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // padding: 20,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '2%',
        marginRight: '2%'

    }
});