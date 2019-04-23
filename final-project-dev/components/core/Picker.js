import React, { Component } from "react";
import { Button, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class BookingPicker extends Component {
    state = {
        isDateTimePickerVisible: false
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    render() {
        return (
            <>
                <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
                <DateTimePicker
                    mode='datetime'
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </>
        );
    }
}