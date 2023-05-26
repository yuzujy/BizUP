import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Menu = () => {
  const router = useRouter();


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "Menu"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={{ flex: 2, padding: SIZES.medium }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            router.push('./home')
                        }}
                    >
                        <Text style={{ color: COLORS.white }}>Browse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            router.push('./bookings')
                        }}
                    >
                        <Text style={{ color: COLORS.white }}>Your Bookings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            router.push('./profile')
                        }}
                    >
                        <Text style={{ color: COLORS.white }}>Your Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius,
                            padding: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            router.replace('')
                        }}
                    >
                        <Text style={{ color: COLORS.white }}>Log Out</Text>
                    </TouchableOpacity>                   
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Menu;