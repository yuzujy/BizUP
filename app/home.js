import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { ShopCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, ShopData } from "../constants";

const Home = () => {
  const [sData, setShopData] = useState(ShopData);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleSearch = (value) => {
    const filteredData = ShopData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    // Filter shops based on selected prices
    const priceFilteredData = filteredData.filter((item) =>
      selectedPrices.includes(item.price)
    );

    setShopData(priceFilteredData);
  };

  const handlePriceFilter = (price) => {
    const isSelected = selectedPrices.includes(price);
    let updatedSelectedPrices = [];
  
    if (isSelected) {
      // Remove price from selectedPrices
      updatedSelectedPrices = selectedPrices.filter(
        (selectedPrice) => selectedPrice !== price
      );
    } else {
      // Add price to selectedPrices
      updatedSelectedPrices = [...selectedPrices, price];
    }
  
    setSelectedPrices(updatedSelectedPrices);
  
    // Filter shops based on selected prices
    const filteredData = updatedSelectedPrices.length > 0
      ? ShopData.filter((item) => updatedSelectedPrices.includes(item.price))
      : ShopData;
  
    setShopData(filteredData);
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
                onPriceFilter={handlePriceFilter}
                selectedPrices={selectedPrices}
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
