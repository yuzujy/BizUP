import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const DateRangePickerScreen = () => {
  const [selectedRange, setSelectedRange] = useState({});
  const navigation = useNavigation();

  const handleDateSelect = (day) => {
    const { dateString } = day;
    const { startDate, endDate } = selectedRange;

    if (!startDate) {
      // Set the start date
      setSelectedRange({ startDate: dateString, endDate });
    } else if (startDate && !endDate) {
      // Set the end date
      const isEndDateBeforeStartDate = dateString < startDate;
      const newEndDate = isEndDateBeforeStartDate ? startDate : dateString;
      setSelectedRange({ startDate, endDate: newEndDate });
    } else {
      // Reset the selection
      setSelectedRange({});
    }
  };

  const handleConfirm = () => {
    const { startDate, endDate } = selectedRange;

    if (startDate && endDate) {
      // Perform actions when the confirm button is pressed
      Alert.alert(
        'Confirmation',
        `Selected range: ${startDate} to ${endDate}`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the desired screen
              navigation.navigate('availslots', { startDate, endDate});
            },
          },
        ],
      );
    } else {
      Alert.alert('Please select a valid date range');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          markingType="period"
          markedDates={{
            [selectedRange.startDate]: { startingDay: true, color: '#a6e3e0' },
            [selectedRange.endDate]: { endingDay: true, color: '#a6e3e0' },
          }}
          onDayPress={handleDateSelect}
        />
      </View>

      {selectedRange.startDate && selectedRange.endDate && (
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    alignSelf: 'center',
    width: '90%', 
    height: 500,
  },
  confirmButton: {
    backgroundColor: '#a6e3e0',
    borderRadius: 40,
    marginTop: -70,
    marginBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
  },
  confirmButtonText: {
    fontSize: 20,
    fontWeight: 500,
    color: '#041b1f',
    textAlign: 'center',
  },
});

export default DateRangePickerScreen;

