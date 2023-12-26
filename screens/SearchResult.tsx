import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";

export default function SearchResult({navigation}:any) {
  const data = [
    {
      id: 1,
      name: "Snake Leather Bag",
      rating: 1,
      sold: 10,
      price: 440,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Suga Leather Shoes",
      rating: 5,
      sold: 60,
      price: 540,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Leather Casual Suit",
      rating: 4,
      sold: 440,
      price: 440,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Black Leather Bag",
      rating: 3,
      sold: 20,
      price: 740,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Airtight Microphone",
      rating: 2,
      sold: 210,
      price: 440,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Black Nike Shoes",
      rating: 5,
      sold: 110,
      price: 840,
      isFav: false,
      img: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const {mode} = useAppSelector((state)=> state.mode)
  const {t} = useTranslation()

  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: mode ? "#181A20" : "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 55,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
          }}
        >
          <Ionicons name={"arrow-back-outline"} size={32} color={mode ? "white" : "black"} />
          <Text style={{ fontSize: 20, fontWeight: "bold",color: mode ? "white" : "black", }}>Clothers</Text>
        </View>
        <Ionicons name={"search-outline"} size={30} color={mode ? "white" : "black"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
            marginVertical: 20,
          }}
        >
          {data.map((el: any, index: any) => {
            return (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('SingleItem')}>
                <View  style={{ width: "100%" }}>
                  <ImageBackground
                    source={{ uri: el.img }}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        padding: 6,
                        borderRadius: 20,
                        backgroundColor: "black",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="heart-o" size={20} color="white" />
                    </View>
                  </ImageBackground>
                  <View>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: mode ? "white" : "black",
                      }}
                    >
                      {el.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginVertical: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 3,
                          alignItems: "center",
                        }}
                      >
                        <Icon name="star-half-empty" size={20} color={mode ? "silver" : "black"} />
                        <Text style={{ color: "silver" }}>{el.rating}</Text>
                      </View>
                      <View
                        style={{
                          height: 10,
                          width: 2,
                          backgroundColor: "silver",
                        }}
                      ></View>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 2,
                          backgroundColor: mode ? '#1F222A' : "#ECECEC",
                          borderRadius: 5,
                        }}
                      >
                        <Text style={{ fontSize: 12,color: mode ? "white" : "black", }}>{el.sold} {t("sold")}</Text>
                      </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "bold",color: mode ? "white" : "black", }}>
                      ${el.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
