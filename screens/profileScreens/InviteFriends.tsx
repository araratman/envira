import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function InviteFriends({ navigation }: any) {
  const data = [
    {
      id: 1,
      name: "Tynisha Obey",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Florencio Dorrance",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Chantal Shelburne",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Maryland Winkles",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Rodolfo Goode",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Benny Spanbauer",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Tyra Dhillon",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Jamel Eusebio",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Pedro Huard",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Clinton Mcclure",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Florencio Dorrance",
      number: "+1-300-555-0135",
      pic: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <Ionicons name={"arrow-back-outline"} size={32} color={mode ? "white" : "black"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold",color: mode ? "white" : "black", }}>
            {t("Invite Friends")}
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 15 }}
      >
        {data.map((el: any, index: any) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  style={{ borderRadius: 35, width: 70, height: 70 }}
                  source={{ uri: el.pic }}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "600",color: mode ? "white" : "black", }}>
                    {el.name}
                  </Text>
                  <Text style={{ color: "silver" }}>{el.number}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: mode ? "#1F222A" : "black",
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "white" }}>{t("Invite")}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
