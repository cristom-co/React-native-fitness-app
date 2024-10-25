import { View, Text, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function home() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>home</Text>
      <Link href={'/'}>Go root</Link>
    </SafeAreaView>
  )
}