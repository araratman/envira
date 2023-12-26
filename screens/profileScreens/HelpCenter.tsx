import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export default function HelpCenter({ navigation }: any) {

  const {t} = useTranslation()

  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: "white", flex: 1 }}>
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
            <Ionicons name={"arrow-back-outline"} size={32} color={"black"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{t("Help Center")}</Text>
        </View>
      </View>
    </View>
  );
}
