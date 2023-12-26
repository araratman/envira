import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../../i18n.config";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function Language({ navigation }: any) {
  const data = [
    { id: 1, lang: "English (US)", selected: true, suggested: true },
    { id: 2, lang: "English (UK)", selected: false, suggested: true },
    { id: 3, lang: "Mandorin", selected: false, suggested: false },
    { id: 4, lang: "Hindi", selected: false, suggested: false },
    { id: 5, lang: "Spanish", selected: false, suggested: false },
    { id: 6, lang: "French", selected: false, suggested: false },
    { id: 7, lang: "Arabic", selected: false, suggested: false },
    { id: 8, lang: "Bengali", selected: false, suggested: false },
    { id: 9, lang: "Russian", selected: false, suggested: false },
    { id: 10, lang: "Indonesia", selected: false, suggested: false },
  ];

  const [lang, setLang] = useState([
    { id: 1, lang: "English (US)", selected: true, key: "en" },
    { id: 2, lang: "Русский", selected: false, key: "ru" },
    { id: 3, lang: "Հայերեն", selected: false, key: "am" },
  ]);

  const { mode } = useAppSelector((state) => state.mode);

  const getLanguage = async () => {
    let data: any = await AsyncStorage.getItem("lang");
    data = JSON.parse(data);
    const updatedLang = lang.map((el: any) => {
      if (data.id == el.id) {
        return { ...el, selected: true };
      } else {
        return { ...el, selected: false };
      }
    });
    setLang(updatedLang);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const changeLang = (langItem: any) => {
    const updatedLang = lang.map((el: any) => {
      if (langItem.id == el.id) {
        AsyncStorage.setItem("lang", JSON.stringify(langItem));
        i18n.changeLanguage(langItem.key);
        return { ...el, selected: true };
      } else {
        return { ...el, selected: false };
      }
    });
    setLang(updatedLang);
  };

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
            {t("Language")}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold",color: mode ? "white" : "black", }}>
            {t("Suggested")}
          </Text>
          {lang.map((el: any, index: any) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontWeight: "600",color: mode ? "white" : "black", }}>{el.lang}</Text>
                <RadioButton
                  color={mode ? "white" : "black"}
                  value="first"
                  status={el.selected && "checked"}
                  onPress={() => {
                    changeLang(el);
                  }}
                />
              </View>
            );
          })}
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#F3F3F3",
            marginVertical: 20,
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold",color: mode ? "white" : "black", }}>
            {t("Language")}
          </Text>
          {data.map((el: any, index: any) => {
            return (
              !el.suggested && (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontWeight: "600",color: mode ? "white" : "black", }}>{el.lang}</Text>
                  <RadioButton color={mode ? "white" : "black"} value="first" />
                </View>
              )
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
