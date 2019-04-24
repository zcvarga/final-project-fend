import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Left } from 'native-base';
import axios from 'axios';
import Header from '../components/core/Header';
import VenueCard from '../components/core/VenueCard';
import Map from '../components/core/Map'

export default class MainScreen extends React.Component {
    state = {
        restaurants: []
    }
    _getRestaurants = () => {
        let url = 'https://projectdatabase360.herokuapp.com/api/restaurants'
        axios.get(url).then(({ data: { restaurants } }) => {
            this.setState({ restaurants })
        }).catch((err) => { console.log(err) })
    }

    componentDidMount() {
        this._getRestaurants();
    }
    render() {
        const { navigation } = this.props;
        const search = navigation.getParam('search', 'NO-NAME');
        return (
            <Container style={styles.container}>
                <Header search={search} />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Nearby">
                        <ScrollView style={styles.cardContainer}>
                            {this.state.restaurants.map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)}
                        </ScrollView>
                    </Tab>
                    <Tab heading="Top rated">
                        <ScrollView style={styles.cardContainer}>
                            {this.state.restaurants.sort(function (a, b) {
                                return b.rating - a.rating;
                            }).map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)}
                        </ScrollView>
                    </Tab>
                    <Tab heading="Map View">
                        <Map navigation={navigation} />
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

    }
});