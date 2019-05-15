import React, { Component } from 'react';

import { CalendarList } from 'react-native-calendars';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Body, Icon, } from 'native-base';
import axios from 'axios';

export default class BookingPicker extends Component {
    state = {
        restaurant: null,
        date: null,
        tableBooking: null,
        hours: null,
        pickedHour: null,
    }
    _getRestaurantData = () => {
        const { table_id, restaurant_id } = this.props;
        let url = `https://projectdatabase360.herokuapp.com/api/restaurants/${restaurant_id}`
        axios.get(url).then((res) => {
            // console.log('tablebooking:', res.data.restaurant.table_booking)
            this.setState({ tableBooking: res.data.restaurant.table_booking })
        })
    }
    _getHours = () => {
        const date = this.state.date;
        const { table_id, restaurant_id } = this.props;
        // console.log(table_id)
        if (this.state.tableBooking[date]) {
            this.state.tableBooking[date].map(el => {

                if (el.id === table_id) {
                    console.log(el.hours)
                    this.setState({ hours: el.hours })

                }
            })

        }
    }

    _patchData = (date, tableId, hour, object) => {
        const result = { ...object };
        function change(obj, tableid, hourx) {
            if (obj.id === tableid) {
                obj.hours[hourx] = !obj.hours[hourx];
                obj.booked = !obj.booked;
                return obj;
            }
            else return obj;
        }
        result[date] = result[date].map(obj => change(obj, tableId, hour));
        return result;
    };

    _patchConfirm = () => {
        // console.log('patch function')
        const { navigation, restaurant_id, table_id, name, photo } = this.props;
        let url = `https://projectdatabase360.herokuapp.com/api/restaurants/${restaurant_id}`
        let patchData = this._patchData(this.state.date, table_id, this.state.pickedHour, this.state.tableBooking)
        // console.log(patchData)
        // console.log(url)
        axios.patch(url, { 'table_booking': patchData }).then(({ res }) => {
            // console.log(res)
            navigation.navigate('Confirmation', { table: table_id, name: name, time: this.state.pickedHour, date: this.state.date, photo: photo })
        })
    }
    _cancelBooking = () => {
        const { navigation } = this.props;
        const url = 'https://projectdatabase360.herokuapp.com/api/communication';
        axios.patch(url, { "patched_table_id": 0 }).then(() => {

            navigation.navigate('Main')

        })

    }


    componentDidMount() {
        this._getRestaurantData()
    }

    componentDidUpdate(_, prevState) {
        if (prevState.date !== this.state.date) {
            this._getHours()
        }
    }

    render() {
        console.log('hours', this.state.hours)
        // console.log(this.state.date)
        // console.log(this.state.pickedHour)
        const { navigation } = this.props;
        return (
            <View>
                <Text style={styles.datetime}>Your booking </Text>
                <View style={styles.name}>

                    <Text style={styles.details}>{this.props.name} {this.state.date ? `on ${this.state.date}` : ''} {this.state.pickedHour !== null ? ` at ${this.state.pickedHour === 0 ? '12 am' : this.state.pickedHour + ' pm'} ` : ''} </Text>

                </View>
                <Text style={styles.datetime}>Date & Time </Text>
                <View>
                    <CalendarList
                        style={{ width: '100%' }}
                        current={'2019-04-25'}
                        minDate={'2019-04-25'}
                        markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: '#D9D9D9' } }}
                        onDayPress={(day) => { this.setState({ date: day.dateString }) }}
                        pastScrollRange={24}
                        futureScrollRange={24}
                        horizontal
                        pagingEnabled
                        markedDates={{
                            [this.state.date]: { selected: true, selectedColor: '#113859' }
                        }}
                    />
                </View>


                {this.state.hours ? <ScrollView horizontal={true} style={{ marginTop: '2%' }}>
                    {this.state.hours.map((el, index) => {
                        if (el === false) {
                            // console.log(index)
                            return <Card key={index} style={index !== this.state.pickedHour ? styles.card : styles.choosenCard}>
                                <CardItem button onPress={() => this.setState({ pickedHour: index })} style={index !== this.state.pickedHour ? styles.item : styles.choosenItem}>
                                    < Text style={index !== this.state.pickedHour ? styles.text : styles.choosenText}> {!index ? '12 am' : `${index} pm`}</Text>
                                </CardItem>
                            </Card>

                        }
                    })}
                </ScrollView> : <View></View>}

                {this.state.pickedHour ?
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => { this._cancelBooking() }}>
                            <View style={styles.cancelSmall}>
                                <Text style={{ color: 'white' }}>CANCEL</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this._patchConfirm() }}>
                            <View style={styles.confirm}>
                                <Text style={{ color: 'white' }}>CONFIRM</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <Button onPress={() => { this._cancelBooking() }} title="Cancel" /> */}
                        {/* <Button style={styles.button} title="Confirm booking" onPress={() => { this._patchConfirm() }} /> */}
                    </View> :

                    <TouchableOpacity onPress={() => { this._cancelBooking() }}>
                        <View style={styles.cancel}>
                            <Text style={{ color: 'white' }}>CANCEL</Text>
                        </View>
                    </TouchableOpacity>



                    // <View style={styles.bottom}>
                    // <Button style={styles.button} title="Cancel" onPress={() => { this._cancelBooking() }} />
                    // </View>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        // marginRight: '5%',
        // marginLeft: '5%',
        marginTop: '1%',
        marginBottom: '1%',
        height: 60,
        width: 100,
        backgroundColor: 'white',
        margin: 20,
        borderWidth: 0
    },
    name: {
        height: 60,
        marginBottom: 10,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,

    },
    choosenCard: {
        marginTop: '1%',
        marginBottom: '1%',
        height: 60,
        width: 100,
        backgroundColor: '#113859',
        margin: 20,
        // borderRadius: 50
    },
    item: {
        backgroundColor: 'white',
    },
    choosenItem: {
        backgroundColor: '#113859',
    },
    text: {
        color: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    choosenText: {
        color: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    datetime: {
        color: '#B9B9B9',
        margin: 5
    },
    details: {
        fontFamily: 'Copperplate-Light',
        fontSize: 16
    },
    button: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%'

    },
    cancel: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'

    },
    cancelSmall: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '120%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    confirm: {
        backgroundColor: '#113859',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '120%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    }

})


// import React, { Component } from "react";
// import { Button, View } from "react-native";
// import DateTimePicker from "react-native-modal-datetime-picker";

// export default class BookingPicker extends Component {
//     state = {
//         isDateTimePickerVisible: false,
//         date: null
//     };

//     showDateTimePicker = () => {
//         this.setState({ isDateTimePickerVisible: true });
//     };

//     hideDateTimePicker = () => {
//         this.setState({ isDateTimePickerVisible: false });
//     };

//     handleDatePicked = date => {
//         console.log("A date has been picked: ", date);
//         this.setState({ date })
//         this.hideDateTimePicker();
//     };

//     render() {
//         console.log(this.state.date)
//         return (
//             <>
//                 <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
//                 <DateTimePicker
//                     mode='datetime'
//                     isVisible={this.state.isDateTimePickerVisible}
//                     onConfirm={this.handleDatePicked}
//                     onCancel={this.hideDateTimePicker}
//                 />
//             </>
//         );
//     }
// }