import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Left } from 'native-base';
import axios from 'axios';
import Header from '../components/core/Header';
import VenueCard from '../components/core/VenueCard';

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
        return (
            <Container style={styles.container}>
                <Header />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Nearby">
                        <ScrollView style={styles.cardContainer}>
                            {this.state.restaurants.map(el => <VenueCard key={el.name} venue={el} navigation={this.props.navigation} />)}
                        </ScrollView>
                    </Tab>
                    <Tab heading="Popular">
                    </Tab>
                    <Tab heading="Top rated">
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