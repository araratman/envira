import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export default function Slider({
  styles,
  isGoBack,
  navigation,
  carouselData,
}: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const renderDotIndicators = () => {
    return carouselData.map((dot: any, index: any) => {
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

  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      {isGoBack && (
        <View
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            width: "100%",
            paddingTop: 30,
            paddingLeft: 20,
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Ionicons name={"arrow-back-outline"} size={32} color={"black"} />
          </TouchableOpacity>
        </View>
      )}
      <Carousel
        loop
        width={isGoBack ? width : width - 40}
        height={isGoBack ? 240 : width / 2}
        style={{ borderRadius: 10 }}
        autoPlay={true}
        data={carouselData}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ index }) => (
          <ImageBackground
            source={{ uri: carouselData[index] }}
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            {!isGoBack && (
              <View
                style={{
                  width: "55%",
                  flexDirection: "column",
                  gap: 5,
                  paddingLeft: 25,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                >
                  30%
                </Text>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  {t("Today's Special!")}
                </Text>
                <Text style={{ color: "white", fontSize: 14 }}>
                  {t("GetDiscount")}
                </Text>
              </View>
            )}
          </ImageBackground>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
}
