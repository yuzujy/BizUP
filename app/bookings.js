import React, { useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
  }

  render() {
    return (
      
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <View style={styles.textView}>

        <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center" }}>
          Your bookings at a glance. 
        </Text>
      </View>

        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: '#27b8b0',
            todayTextColor: '#27b8b0',
            arrowColor: '#27b8b0',
          }}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6e3e0',
  },

  textView: {
    height: 150,
    marginBottom: 0,
    justifyContent:"center",
    alignItems: "center",
  },

  calendar: {
    borderTopWidth: 2,
    paddingTop: 15,
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderColor: '#fff',
    height: 350,
    backgroundColor: '#fff'
  }
});




