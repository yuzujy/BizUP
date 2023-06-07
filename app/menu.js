import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Menu = () => {
  const router = useRouter();


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#fff' },
                    headerShadowVisible: false,
                    headerTitle: "Menu"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={{ flex: 2, padding: SIZES.medium, alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#a6e3e0',
                            borderRadius: 10,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 350,
                        }}
                        onPress={() => {
                            router.push('./home')
                        }}
                    >
                        <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
                            Browse
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#a6e3e0',
                            borderRadius: 10,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 350,
                        }}
                        onPress={() => {
                            router.push('./bookings')
                        }}
                    >
                        <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }} onPress={() => {
        router.push('./bookings')}}>
                            Your Bookings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#a6e3e0',
                            borderRadius: 10,
                            padding: SIZES.medium,
                            marginBottom: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 350,
                        }}
                        onPress={() => {
                            router.push('./profile')
                        }}
                    >
                        <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
                            Your Profile
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#a6e3e0',
                            borderRadius: 10,
                            padding: SIZES.medium,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 350,
                        }}
                        onPress={() => {
                            router.replace('')
                        }}
                    >
                        <Text style={{ color: '#041b1f', fontSize: 18, fontWeight: 500 }}>
                            Log Out
                            </Text>
                    </TouchableOpacity>                   
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Menu;