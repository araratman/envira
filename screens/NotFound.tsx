import {
  View,
  Text,
  Image,
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";

export default function NotFound({ navigation, route }: any) {
  const { t } = useTranslation();
  const { mode } = useAppSelector((state) => state.mode);

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
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: 75,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: mode ? "white" : "black",
          }}
        >
          {t("Results for")} "{route.params?.key}"
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: mode ? "white" : "black",
          }}
        >
          0 {t("found")}
        </Text>
      </View>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{
          uri: "https://img.freepik.com/premium-vector/clipboard-icon-flat-stylevector-illustration-white-background_172784-287.jpg?w=826",
        }}
      />
      <View
        style={{ width: "95%", flexDirection: "column", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: mode ? "white" : "black",
          }}
        >
          {t("Not Found")}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: mode ? "white" : "black",
          }}
        >
          {t("KeywordDontFound")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    marginTop: "15%",
  },
  passwordContainerDark: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1F222A",
    borderRadius: 10,
    marginTop: "15%",
  },
  inputStyle: {
    flex: 1,
  },
});
