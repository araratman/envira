import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function PrivacyPolicy({ navigation }: any) {
  const data = [
    {
      id: 1,
      desc: "Types of Data We Collect",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ratione ex enim veritatis nulla vitae sit facilis facere architecto, similique porro temporibus magnam error iste? Culpa maxime nihil tempore exercitationem optio placeat quis odio illum perferendis fuga! Repellendus similique velit, dignissimos pariatur commodi illo enim, quae distinctio cumque ipsam quia laudantium facere ab, hic nemo in tempora accusantium qui officiis iusto non officia modi. Laborum vero non aut doloremque iure amet sed nesciunt inventore quisquam adipisci voluptatum, totam cumque quo aliquam debitis quidem, blanditiis deserunt similique aperiam maxime rerum. Beatae temporibus nisi velit, excepturi repellendus repudiandae sit molestias magnam officiis?",
    },
    {
      id: 2,
      desc: "Use of Your Personal Data",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ratione ex enim veritatis nulla vitae sit facilis facere architecto, similique porro temporibus magnam error iste? Culpa maxime nihil tempore exercitationem optio placeat quis odio illum perferendis fuga! Repellendus similique velit, dignissimos pariatur commodi illo enim, quae distinctio cumque ipsam quia laudantium facere ab, hic nemo in tempora accusantium qui officiis iusto non officia modi. Laborum vero non aut doloremque iure amet sed nesciunt inventore quisquam adipisci voluptatum, totam cumque quo aliquam debitis quidem, blanditiis deserunt similique aperiam maxime rerum. Beatae temporibus nisi velit, excepturi repellendus repudiandae sit molestias magnam officiis?",
    },
    {
      id: 3,
      desc: "Disclosure of Your Personal Data",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ratione ex enim veritatis nulla vitae sit facilis facere architecto, similique porro temporibus magnam error iste? Culpa maxime nihil tempore exercitationem optio placeat quis odio illum perferendis fuga! Repellendus similique velit, dignissimos pariatur commodi illo enim, quae distinctio cumque ipsam quia laudantium facere ab, hic nemo in tempora accusantium qui officiis iusto non officia modi. Laborum vero non aut doloremque iure amet sed nesciunt inventore quisquam adipisci voluptatum, totam cumque quo aliquam debitis quidem, blanditiis deserunt similique aperiam maxime rerum. Beatae temporibus nisi velit, excepturi repellendus repudiandae sit molestias magnam officiis?",
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
            {t("Privacy Policy")}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((el: any, index: any) => {
          return (
            <View key={index}>
              <Text
                style={{ fontWeight: "600", fontSize: 18, marginVertical: 15,color: mode ? "white" : "black", }}
              >
                {el.id}. {el.desc}
              </Text>
              <Text style={{ fontSize: 14,color: mode ? "#E0E0E0" : "#424242", }}>{el.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
