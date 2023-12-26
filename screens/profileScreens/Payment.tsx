import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function Payment({ navigation }: any) {
  const icons = [
    {
      id: 1,
      text: "PayPal",
      image: require("../../assets/images/social-icons/paypal.png"),
      connected: "Connected",
    },
    {
      id: 2,
      text: "Google Pay",
      image: require("../../assets/images/social-icons/google.png"),
      connected: "Connected",
    },
    {
      id: 3,
      text: "Apple Pay",
      image: require("../../assets/images/social-icons/apple.png"),
      connected: "Connected",
    },
    {
      id: 4,
      text: "**** **** **** 4679",
      image: require("../../assets/images/social-icons/mastercard.png"),
      connected: "Connected",
    },
  ];
  const { mode } = useAppSelector((state) => state.mode);
  const { t } = useTranslation();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: mode ? "#181A20" : "white",
        flex: 1,
      }}
    >
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name={"arrow-back-outline"}
              size={32}
              color={mode ? "white" : "black"}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: mode ? "white" : "black",
            }}
          >
            {t("Payment")}
          </Text>
        </View>
        <Ionicons
          name={"ellipsis-horizontal-circle"}
          size={32}
          color={mode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 30 }}>
          {icons.map((el: any, index: any) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: mode ? "#1F222A" : "#FAFAFA",
                  borderRadius: 15,
                  padding: 10,
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}
              >
                <View
                  style={{
                    paddingVertical: 15,
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={el.image}
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 15,
                      objectFit: "contain",
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "600",
                      color: mode ? "white" : "black",
                    }}
                  >
                    {el.text}
                  </Text>
                </View>
                <Text
                  style={{ fontWeight: "600", color: mode ? "white" : "black" }}
                >
                  {el.connected}
                </Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            paddingVertical: 20,
            backgroundColor: mode ? "white" : "black",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("AddNewCard")}
        >
          <Text style={{ color: mode ? "black" : "white" }}>{t("Add New Card")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
