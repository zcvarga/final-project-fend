import React from 'react';
import { MapView } from 'expo';
import { Location, Permissions } from 'expo';
import { Marker } from 'react-native-maps';
import axios from 'axios';
export default class Map extends React.Component {
    state = {
        region: null,
        restaurants: []
    };
    componentDidMount() {
        this.getLocationAsync();
        this.getRestaurants();
    }
    getRestaurants = () => {
        axios
            .get('https://projectdatabase360.herokuapp.com/api/restaurants')
            .then(res => this.setState({ restaurants: res.data.restaurants }))
            .catch(err => console.log(err));
    };
    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied'
            });
        }
        const deltas = {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        };
        let location = await Location.getCurrentPositionAsync({});
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            ...deltas
        };
        await this.setState({ region });
    };
    renderMarkers() {
        const { navigation } = this.props
        return this.state.restaurants.map((restaurant, i) => (
            <Marker
                onPress={() => {
                    console.log(restaurant.restaurant_id);
                    navigation.navigate('Single', {
                        venue: this.state.restaurants.filter(el => el.restaurant_id === restaurant.restaurant_id
                        )[0]
                    })
                }}
                key={restaurant.restaurant_id}
                title={restaurant.name}
                coordinate={{
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                image={require('../../assets/location-pointer.png')}
            />
        ));
    }
    render() {
        return (
            <MapView style={{ flex: 1 }} initialRegion={this.state.region}>
                {this.renderMarkers()}
            </MapView>
        );
    }
}