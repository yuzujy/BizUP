import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';

const profile = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={styles.image} source = {require("../assets/images/kemal.jpg")}/>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>
                    profile
                    </Text>
                    </View>
                
            </ScrollView>
    );
};

export default profile;