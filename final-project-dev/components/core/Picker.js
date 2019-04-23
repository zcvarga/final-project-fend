import React, { Component } from 'react';

import { CalendarList } from 'react-native-calendars';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';

export default class BookingPicker extends Component {
    state = {
        date: null,
        tableBooking: null,
        hours: null,
        pickedHour: null
    }
    _getRestaurantData = () => {
        const { table_id, restaurant_id } = this.props;
        let url = `https://projectdatabase360.herokuapp.com/api/restaurants/${restaurant_id}`
        axios.get(url).then((res) => {
            this.setState({ tableBooking: res.data.restaurant.table_booking })
        })
    }
    _getHours = () => {
        const date = this.state.date;
        const { table_id, restaurant_id } = this.props;
        console.log(table_id)
        if (this.state.tableBooking[date]) {
            this.setState({ hours: this.state.tableBooking[date].map(el => el.id === table_id) })
        }
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
        console.log(this.state.hours)
        return (
            <View>
                <CalendarList
                    current={'2019-04-23'}
                    minDate={'2019-04-23'}
                    markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: '#D9D9D9' } }}
                    onDayPress={(day) => { this.setState({ date: day.dateString }) }}
                    pastScrollRange={24}
                    futureScrollRange={24}
                    horizontal
                    pagingEnabled
                    markedDates={{
                        [this.state.date]: { selected: true, selectedColor: '#D9D9D9' }
                    }}
                // style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
                />
                {this.state.hours ? <ScrollView horizontal={true}>
                    {this.state.hours.map((el, index) => {
                        if (el === false) {
                            console.log(index)
                            return < Text key={index}> {!index ? '12 am' : `${index} pm`}</Text>
                        }
                    })}
                </ScrollView> : <View></View>}

            </View>
        );
    }
}




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