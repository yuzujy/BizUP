import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import daterangepicker from './daterangepicker';

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
      <TouchableOpacity onPress={navigateToDateRangePicker}>
        <Text>Select A Date</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => select(cell, date, slot)} />
      </View>
      <Text>Confirm</Text>
      <TouchableOpacity disabled={isConfirmationDisabled} onPress={handleConfirmation}>
        <Text>Confirm Appointment</Text>
      </TouchableOpacity>

      {/* Render the DateRangePickerScreen when the screen is navigated */}
    </View>
  );
};

export default AppointmentScreen;
