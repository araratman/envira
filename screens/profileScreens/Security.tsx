import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function Security({ navigation }: any) {
  const data = [
    { id: 1, option: "Remember me", checked: true },
    { id: 2, option: "Face ID", checked: false },
    { id: 3, option: "Biometric ID", checked: true },
    { id: 4, option: "Google Authenticator", checked: "" },
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
            {t("Security")}
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
              <Text style={{ fontWeight: "600", fontSize: 18, color: mode ? "white" : "black", }}>
                {el.option}
              </Text>
              {el.id == 4 ? (
                <Ionicons name={"chevron-forward"} size={22} color={mode ? "white" : "black"} />
              ) : (
                <Switch
                  trackColor={{ false: "#767577", true: "silver" }}
                  thumbColor={el.checked ? "#767577" : "#767577"}
                  ios_backgroundColor="#3e3e3e"
                  value={el.checked}
                />
              )}
            </View>
          );
        })}
        <View style={{ flexDirection: "column", gap: 20, marginTop: 30 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              paddingVertical: 20,
              backgroundColor:mode ? '#1F222A' : '#FAFAFA',
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: mode ? "white" : "black",}}>{t("Change PIN")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "100%",
              paddingVertical: 20,
              backgroundColor:mode ? '#1F222A' : '#FAFAFA',
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: mode ? "white" : "black",}}>{t("Change Password")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
