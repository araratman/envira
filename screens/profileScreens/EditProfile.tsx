import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import SelectDropdown from "react-native-select-dropdown";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function EditProfile({ navigation }: any) {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const { mode } = useAppSelector((state) => state.mode);

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
          <Text style={{ fontSize: 20, fontWeight: "bold",  color: mode ? "white" : "black", }}>
            {t("Edit Profile")}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <View
          style={mode ? styles.passwordContainerDark : styles.passwordContainer}
        >
          <TextInput
            style={mode ? styles.inputStyleDark : styles.inputStyle}
            autoCorrect={false}
            placeholder="Andrew Ainsley"
            placeholderTextColor={mode ? "white" : "#000"}
          />
        </View>
        <View
          style={mode ? styles.passwordContainerDark : styles.passwordContainer}
        >
          <TextInput
            style={mode ? styles.inputStyleDark : styles.inputStyle}
            autoCorrect={false}
            placeholder="Andrew"
            placeholderTextColor={mode ? "white" : "#000"}
          />
        </View>
        <View
          style={mode ? styles.passwordContainerDark : styles.passwordContainer}
        >
          <TextInput
            style={mode ? styles.inputStyleDark : styles.inputStyle}
            autoCorrect={false}
            placeholder="12/27/1995"
            placeholderTextColor={mode ? "white" : "#000"}
            value={calendarValue}
            editable={false}
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
            onDayPress={onDayPress}
          />
        )}

        <View
          style={mode ? styles.passwordContainerDark : styles.passwordContainer}
        >
          <TextInput
            style={mode ? styles.inputStyleDark : styles.inputStyle}
            autoCorrect={false}
            placeholder="andrew_ainsley@yourdomain.com"
            placeholderTextColor={mode ? "white" : "#000"}
            dataDetectorTypes={"phoneNumber"}
          />
          <TouchableOpacity>
            <Ionicons
              name={"mail-outline"}
              size={20}
              color={mode ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <SelectDropdown
          buttonStyle={{
            width: "100%",
            borderRadius: 10,
            marginVertical: 15,
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
          }}
          buttonTextStyle={{
            textAlign: "left",
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
            color: mode ? "white" : "black",
          }}
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <Ionicons
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={mode ? "white" : "black"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
        <SelectDropdown
          buttonStyle={{
            width: "100%",
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
            borderRadius: 10,
            marginVertical: 15,
          }}
          buttonTextStyle={{
            textAlign: "left",
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
            color: mode ? "white" : "black",
          }}
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <Ionicons
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={mode ? "white" : "black"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
        <SelectDropdown
          buttonStyle={{
            width: "100%",
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
            borderRadius: 10,
            marginVertical: 15,
          }}
          buttonTextStyle={{
            textAlign: "left",
            backgroundColor: mode ? "#1F222A" : "#FAFAFA",
            color: mode ? "white" : "black",
          }}
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <Ionicons
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={mode ? "white" : "black"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
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
  },
  inputStyleDark: {
    flex: 1,
    color: 'white'
  },
});
