import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateRangePicker from './daterangepicker';

const AppointmentScreen = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isConfirmationDisabled, setIsConfirmationDisabled] = useState(true);

  const navigation = useNavigation();

  const select = (cell, date, slot) => {
    if (selectedCell) {
      selectedCell.classList.remove('selected');
    }
    cell.classList.add('selected');
    setSelectedCell(cell);

    setSelectedDate(date);
    setSelectedSlot(slot);
    setIsConfirmationDisabled(false);
  };

  const handleConfirmation = () => {
    Alert.alert(
      'Confirmation',
      `Congratulations! Your appointment has been booked for:\nDate: ${selectedDate}\nSlot: ${selectedSlot}.`,
    );
  };

  const navigateToDateRangePicker = () => {
    navigation.navigate('daterangepicker');
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#a6e3e0',
          borderRadius: 20,
          padding: 10,
          marginBottom: 20,
          marginTop: 40,
          marginHorizontal: 110,
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
        }}
        onPress={navigateToDateRangePicker}
      >
        <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
          Select a Date Range
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#a6e3e0',
            borderRadius: 20,
            padding: 10,
            marginBottom: 20,
            marginHorizontal: 110,
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
          }}
          onPress={navigateToDateRangePicker}
        >
          <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
            Confirm Appointment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#a6e3e0',
            borderRadius: 20,
            padding: 10,
            marginBottom: 20,
            marginHorizontal: 110,
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
          }}
          onPress={navigateToDateRangePicker}
        >
          <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
            Operating Hours
          </Text>
        </TouchableOpacity>

        {/* Render the DateRangePickerScreen when the screen is navigated */}
      </View>
    </View>
  );
};

export default AppointmentScreen;
