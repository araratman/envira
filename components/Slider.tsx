import {
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export default function Slider({ styles, isGoBack, navigation }: any) {
  const flatListRef: any = useRef();

  const screenWidth = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation()

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data: any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });
  const carouselData = [
    {
      id: "01",
      image:
        "https://images.unsplash.com/photo-1695881839620-d66f38541d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "02",
      image:
        "https://images.unsplash.com/photo-1696229951902-f9588427c811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: "03",
      image:
        "https://images.unsplash.com/photo-1696104236620-ea947677e382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor: activeIndex === index ? "black" : "silver",
            height: 10,
            width: activeIndex === index ? 60 : 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      );
    });
  };

  const renderItem = ({ item, index }: any) => {
    return  (
      <ImageBackground
        style={styles.styleForSlider}
        imageStyle={styles.img}
        resizeMode="cover"
        source={{
          uri: item.image,
        }}
      >
        <View
          style={{
            width: "55%",
            flexDirection: "column",
            gap: 5,
            paddingLeft: 25,
          }}
        >
          <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
            30%
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {t("Today's Special!")}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            {t('GetDiscount')}
          </Text>
        </View>
      </ImageBackground>
    )
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(Math.round(index));
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={carouselData}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      {isGoBack && (
        <View style={{  position: "absolute", backgroundColor: 'rgba(255,255,255,1)', width: '100%', paddingTop: 30, paddingLeft:20, paddingBottom:10 }}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          // style={{  left: 30, top: 30 }}
        >
          <Ionicons name={"arrow-back-outline"} size={32} color={"black"} />
        </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 15,
          right: "40%",
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
}
