import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function AddNewCard({ navigation }: any) {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");
  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const onDayPress = (day: any) => {
    setCalendarValue(day.dateString);
    closeCalendar();
  };

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
            {t("Add New Card")}
          </Text>
        </View>
        <Ionicons
          name={"ellipsis-horizontal-circle"}
          size={32}
          color={mode ? "white" : "black"}
        />
      </View>
      <Image
        style={{
          width: "100%",
          height: 250,
          objectFit: "contain",
          marginTop: 20,
        }}
        source={{
          uri: "https://m.media-amazon.com/images/G/02/cbccasin/master/amazon__platinum_NEW_Nov19-scaled._CB660815294_.png",
        }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: mode ? "white" : "black", }}>
            {t("Card Name")}
          </Text>
          <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
            <TextInput
              style={mode ? styles.inputStyleDark : styles.inputStyle}
              autoCorrect={false}
              placeholder="Andrew Ainsley"
              placeholderTextColor={mode ? "white" : "#000"}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: mode ? "white" : "black", }}>
            {t("Card Number")}
          </Text>
          <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
            <TextInput
              style={mode ? styles.inputStyleDark : styles.inputStyle}
              autoCorrect={false}
              placeholder="2672 2341 1267 2345"
              placeholderTextColor={mode ? "white" : "#000"}
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", gap: 10 }}>
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: mode ? "white" : "black", }}>
                {t("Expiry Date")}
              </Text>
              <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
                <TextInput
                  style={mode ? styles.inputStyleDark : styles.inputStyle}
                  autoCorrect={false}
                  placeholder="12/27/1995"
                  placeholderTextColor={mode ? "white" : "#000"}
                  value={calendarValue}

                />
                <TouchableOpacity onPress={openCalendar}>
                  <Ionicons
                    name={"calendar-outline"}
                    size={20}
                    color={mode ? "white" : "black"}
                  />
                </TouchableOpacity>
              </View>
              {isCalendarVisible && (
                <Calendar
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    height: 370,
                    position: "absolute",
                    zIndex: 10,
                    left: 10,
                    top: -280,
                  }}
                  onDayPress={onDayPress}
                />
              )}
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: mode ? "white" : "black", }}>CVV</Text>
              <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
                <TextInput
                  style={mode ? styles.inputStyleDark : styles.inputStyle}
                  autoCorrect={false}
                  placeholder="264"
                  placeholderTextColor={mode ? "white" : "#000"}
                />
              </View>
            </View>
          </View>
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
          <Text style={{ color: mode ? "black" : "white" }}>{t("Add")}</Text>
        </TouchableOpacity>
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
    marginVertical: 15,
  },
  passwordContainerDark: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1F222A",
    borderRadius: 10,
    marginVertical: 15,
  },
  inputStyle: {
    flex: 1,
    color:'white'
  },
  inputStyleDark: {
    flex: 1,
    color: 'white'
  },
});
