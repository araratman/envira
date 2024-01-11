import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cart() {

  return (
    <View style={{flex:1}}>
        <Image style={{width: 30, height: 30}} source={require('../assets/images/landing.jpg')} />
    </View>
  )
}
