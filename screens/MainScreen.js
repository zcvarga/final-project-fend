import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Left } from 'native-base';
import axios from 'axios';
import VenueCard from '../components/core/VenueCard';
import Map from '../components/core/Map'
import Reactotron from 'reactotron-react-native'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            filteredRestaurants: [],
            search: ' '
        }
    }


    componentDidMount() {
        this._getRestaurants();
        this.setState({
            search: this.props.navigation.getParam('search', 'NO-NAME')
        })
    }

    filterRestaurants = (searchline) => {
        const filteredRestaurants = this.state.restaurants.filter(venue => venue.name.indexOf(searchline) > -1 || venue.address.indexOf(searchline) > -1);
        this.setState({ filteredRestaurants: filteredRestaurants, search: searchline });
    }

    _getRestaurants = () => {
        let url = 'https://projectdatabase360.herokuapp.com/api/restaurants'
        axios.get(url).then(({ data: { restaurants } }) => {
            this.setState({ restaurants: restaurants, filteredRestaurants: restaurants }, () => this.filterRestaurants(this.state.search))
                .then()
        }).catch((err) => { console.log(err) })
    }


    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput style={styles.searchInput}
                            onChangeText={(text) => this.filterRestaurants(text)}
                            value={this.state.search} />
                    </View>
                </View>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Nearby">
                        <ScrollView style={styles.cardContainer}>
                            {this.state.filteredRestaurants.map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)}
                        </ScrollView>
                    </Tab>
                    <Tab heading="Top rated">
                        <ScrollView style={styles.cardContainer}>
                            {this.state.filteredRestaurants.sort(function (a, b) {
                                return b.rating - a.rating;
                            }).map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)}
                        </ScrollView>
                    </Tab>
                    <Tab heading="Map View">
                        <Map navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
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
        marginLeft: 0,
        marginRight: 0

    },
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