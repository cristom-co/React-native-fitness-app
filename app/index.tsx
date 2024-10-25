import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


export default function index() {

    const router = useRouter();

    return (
        <View style={style.container}>
            <StatusBar style='light' />
            <Image style={style.imageWelcome} source={require('../assets/images/welcome.png')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={style.shadow}
                start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.8 }}>
                <Animated.View entering={FadeInDown.delay(200).springify()} style={{ alignItems: "center", display: 'flex' }}>
                    <Text style={style.textWelcome}>Best <Text style={style.textRed}>Workouts</Text> </Text>
                    <Text style={style.textWelcome}>For you</Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(400).springify()} style={{ alignItems: "center", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => router.push('/home')} style={{ height: hp(7), width: wp(80), backgroundColor: "rgb(244 63 94)", alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
                        <Text style={{ color: 'white', fontSize: hp(3), fontWeight: "bold" }}>Get Stared</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageWelcome: {
        height: hp(100),
        width: wp(100),
        position: "absolute",
    },
    shadow: {
        width: wp(100),
        height: hp(80),
        justifyContent: 'flex-end',
        paddingBottom: 20,
        marginVertical: 10
    },
    textWelcome: {
        fontSize: hp(5),
        color: "white",
        fontWeight: "bold",
        letterSpacing: 0.025,
    },
    textRed: {
        color: 'rgb(244 63 94)'
    }
})