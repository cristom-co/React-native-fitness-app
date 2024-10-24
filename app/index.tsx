import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


export default function index() {
  return (
    <View style={style.container}>
        <StatusBar style='light' />
        <Image style={style.imageWelcome} source={require('../assets/images/welcome.png')} />
        <LinearGradient 
            colors={['trasparent', '#18181b']}  
            style={style.shadow} 
            start={{ x: 0.5, y: 0}} end={{ x: 0.5, y: 0.8}}>
            <View style={{alignItems: "center"}}>
                <Text style={style.textWelcome}>Best <Text style={style.textRed}>Workouts</Text> </Text>
                <Text style={style.textWelcome}>For you</Text>
            </View>
            <View style={{alignItems:"center", marginTop: 25}}>
                <TouchableOpacity style={{ height: hp(7), width: wp(80), backgroundColor: "rgb(244 63 94)", alignItems: "center", justifyContent: "center", borderRadius: 100}}>
                    <Text style={{color: 'white', fontSize: hp(3), fontWeight: "bold"}}>Get Stared</Text>
                </TouchableOpacity>
            </View>

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
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    shadow: {
        width: wp(100), 
        height: hp(70),
        flex: 1,
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