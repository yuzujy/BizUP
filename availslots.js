import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const AvailSlots = () => {
  const route = useRoute();
  const { startDate, endDate } = route.params;
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch(`http://fdb1030.awardspace.net/api/availslots?startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        setSlots(data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, []);

  const handleSlotPress = (slot) => {
    // Handle button press for a specific slot
    console.log('Selected slot:', slot);
  };

  const renderSlot = ({ item }) => (
    <TouchableOpacity onPress={() => handleSlotPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={slots}
      renderItem={renderSlot}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default AvailSlots;
