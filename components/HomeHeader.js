import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { MenuButton } from "./Button";

import { useRouter } from 'expo-router';

const HomeHeader = ({ onSearch, onPriceFilter, selectedPrices }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor:'#a6e3e0',
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MenuButton iconUrl={assets.menu} handlePress={() => {router.push('./menu')}} />
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s search for your favourite services
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        > 
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search available shops"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={assets.filter}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      {showDropdown && (
        <View style={{ backgroundColor: "#fff", padding: 10, marginTop: 10 }}>
          <Text>Price Range</Text>
          <TouchableOpacity onPress={() => onPriceFilter("$")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderColor: COLORS.black,
                  marginRight: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedPrices.includes("$") && (
                  <Image
                    source={assets.tick}
                    resizeMode="contain"
                    style={{ width: 10, height: 10 }}
                  />
                )}
              </View>
              <Text>$</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPriceFilter("$$")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderColor: COLORS.black,
                  marginRight: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedPrices.includes("$$") && (
                  <Image
                    source={assets.tick}
                    resizeMode="contain"
                    style={{ width: 10, height: 10 }}
                  />
                )}
              </View>
              <Text>$$</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPriceFilter("$$$")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderColor: COLORS.black,
                  marginRight: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedPrices.includes("$$$") && (
                  <Image
                    source={assets.tick}
                    resizeMode="contain"
                    style={{ width: 10, height: 10 }}
                  />
                )}
              </View>
              <Text>$$$</Text>
            </View>
          </TouchableOpacity>
          <Text>Location</Text>
          <Text>Appointment Availability</Text>
        </View>
      )}
  
      </View>
    </View>
  );
};

export default HomeHeader;
