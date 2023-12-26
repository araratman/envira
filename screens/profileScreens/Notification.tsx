import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function Notification({ navigation }: any) {
  const data = [
    { id: 1, option: "General Notification", checked: true },
    { id: 2, option: "Sound", checked: false },
    { id: 3, option: "Vibrate", checked: true },
    { id: 4, option: "Special Offers", checked: false },
    { id: 5, option: "Promo & Discount", checked: false },
    { id: 6, option: "Payments", checked: false },
    { id: 7, option: "Cashback", checked: true },
    { id: 8, option: "App Updates", checked: true },
    { id: 9, option: "New Service Available", checked: true },
    { id: 10, option: "New Tips Available", checked: false },
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
            <Ionicons name={"arrow-back-outline"} size={32} color={mode ? "white" : "black"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: mode ? "white" : "black", }}>
            {t("Notification")}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        {data.map((el: any, index: any) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 18,  color: mode ? "white" : "black", }}>
                {el.option}
              </Text>
              <Switch
                trackColor={{ false: "#EEEEEE", true: "#767577" }}
                thumbColor={el.checked ? "white" : "white"}
                ios_backgroundColor="#3e3e3e"
                value={el.checked}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
