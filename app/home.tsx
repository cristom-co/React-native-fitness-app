import React from 'react'
import { View, Text, StyleSheet, Image  } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP } from 'react-native-responsive-screen'

import { Colors } from '../constants/Colors'

export default function home() {
  return (
    <SafeAreaView style={style.container} edges={['top']}>
      <StatusBar style="dark"></StatusBar>
      <View style={style.containerText}>
        <View  style={{gap: 5}}>
          <Text style={style.firstText}>READY TO</Text>
          <Text style={style.secondText}>WORKOUT</Text>
        </View>
        <View style={style.containerImage}>
          <Image style={style.imgAvatar} source={require("../assets/images/avatar.png")}></Image>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  firstText: {
    fontSize: heightPercentageToDP(4.5),
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: Colors.textblack
  },
  secondText: {
    fontSize: heightPercentageToDP(4.5),
    fontWeight: "bold",
    color: Colors.textred
  },
  containerImage: {
    marginVertical: 10
  },
  imgAvatar: {
    height: heightPercentageToDP(6),
    width: heightPercentageToDP(6),
    borderRadius: 100
  }  
})