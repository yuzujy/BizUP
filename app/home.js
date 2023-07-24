import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { ShopCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, ShopData } from "../constants";

const Home = () => {
  const [sData, setShopData] = useState(ShopData);
  const [selectedFilters, setSelectedFilters] = useState({
    prices: [],
    locations: [],
  });

  const handleFilter = (type, value) => {
    const { prices, locations } = selectedFilters;
    let updatedPrices = [...prices];
    let updatedLocations = [...locations];
  
    if (type === "price") {
      const index = prices.indexOf(value);
      if (index !== -1) {
        updatedPrices.splice(index, 1);
      } else {
        updatedPrices.push(value);
      }
    } else if (type === "location") {
      const index = locations.indexOf(value);
      if (index !== -1) {
        updatedLocations.splice(index, 1);
      } else {
        updatedLocations.push(value);
      }
    }
  
    setSelectedFilters({ prices: updatedPrices, locations: updatedLocations });
  
    // Filter shops based on selected prices and locations
    let filteredData = ShopData;
  
    if (updatedPrices.length > 0) {
      filteredData = filteredData.filter((item) =>
        updatedPrices.includes(item.price)
      );
    }
  
    if (updatedLocations.length > 0) {
      filteredData = filteredData.filter((item) =>
        updatedLocations.includes(item.location)
      );
    }
  
    if (filteredData.length === 0) {
      filteredData = [];
    }
  
    setShopData(filteredData);
  };
    
  const handleSearch = (value) => {
    const filteredData = ShopData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  
    // Apply the existing selected filters on search
    const { prices, locations } = selectedFilters;
  
    let filteredLocations = filteredData;
    if (prices.length > 0) {
      filteredLocations = filteredData.filter((item) =>
        prices.includes(item.price)
      );
    }
  
    let filteredResults = filteredLocations;
    if (locations.length > 0) {
      filteredResults = filteredLocations.filter((item) =>
        locations.includes(item.location)
      );
    }
  
    if (filteredResults.length === 0) {
      filteredResults = [];
    }
  
    setShopData(filteredResults);
  };   
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor="#a6e3e0" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={sData}
            renderItem={({ item }) => <ShopCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader
                onSearch={handleSearch}
                handleFilter={handleFilter}
                selectedPrices={selectedFilters.prices}
                selectedLocations={selectedFilters.locations}
              />
            }
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: "#a6e3e0" }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
