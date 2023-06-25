import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { ShopCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, ShopData } from "../constants";

const Home = () => {
  const [sData, setShopData] = useState(ShopData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setShopData(ShopData);
    }

    const filteredData = ShopData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setShopData(ShopData);
    } else {
      setShopData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor='#a6e3e0' />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={sData}
            renderItem={({ item }) => <ShopCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
          <View
            style={{ height: 300, backgroundColor:'#a6e3e0' }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
