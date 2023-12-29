import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../state/hooks";

export default function AddNewCard({ navigation }: any) {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardName, setCreditCardName] = useState('')
  const [creditCardDate, setCreditCardDate] = useState()
  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const onDayPress = (day: any) => {
    const regexPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    const transformedDate = day.toString().replace(regexPattern, "$1/$2");
    console.log(day);
    setCalendarValue(`${day?.year}/${day?.month}`);
    closeCalendar();
  };


  const formatCreditCardNumber = (input: any) => {
    const numericInput = input.replace(/\D/g, "");
    const formattedInput = numericInput.replace(
      /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/,
      (match: any, p1: any, p2: any, p3: any, p4: any) => {
        let formattedString = `${p1} ${p2} ${p3} ${p4}`;
        return formattedString;
      }
    );
    const truncatedInput = formattedInput.slice(0, 19);

    return truncatedInput;
  };

  const handleCreditCardNumberChange = (input: any) => {
    const formattedInput = formatCreditCardNumber(input);
    setCreditCardNumber(formattedInput);
  };

  const { mode } = useAppSelector((state) => state.mode);

  const { t } = useTranslation();
  return (
    <ScrollView
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
            {t("Add New Card")}
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
          backgroundColor: "#232323",
          width: "100%",
          height: 250,
          borderRadius: 25,
          marginTop: 20,
          padding: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold",fontSize: 18, }}>Mocard</Text>
          <Text style={{ color: "white", fontWeight: "bold",fontSize: 18, }}>amazon</Text>
        </View>
        <TextInput
          editable={false}
          placeholder={creditCardNumber}
          placeholderTextColor={"white"}
          style={{ fontSize: 20, marginVertical: 50 }}
        />
        <View style={{flexDirection:'row', alignItems:'center', gap:20}}>
          <View style={{width: '60%'}}>
            <Text style={{ color: "white",fontSize: 12  }}>Card Holder name</Text>
            <TextInput style={{width: '100%'}} placeholderTextColor={'white'} placeholder={creditCardName.toUpperCase()} editable={false} />
          </View>
          <View style={{width: '40%'}}>
            <Text style={{ color: "white", fontSize: 12  }}>Expiry date</Text>
            <TextInput placeholderTextColor={'white'} dataDetectorTypes={'calendarEvent'} placeholder={calendarValue} editable={false}  />
          </View>
          <Image source={{ uri: "/" }} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: mode ? "white" : "black",
            }}
          >
            {t("Card Name")}
          </Text>
          <View
            style={
              mode ? styles.passwordContainerDark : styles.passwordContainer
            }
          >
            <TextInput
              style={mode ? styles.inputStyleDark : styles.inputStyle}
              autoCorrect={false}
              placeholder="Andrew Ainsley"
              placeholderTextColor={mode ? "white" : "silver"}
              onChangeText={(e)=>setCreditCardName(e)}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: mode ? "white" : "black",
            }}
          >
            {t("Card Number")}
          </Text>
          <View
            style={
              mode ? styles.passwordContainerDark : styles.passwordContainer
            }
          >
            <TextInput
              style={mode ? styles.inputStyleDark : styles.inputStyle}
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={16}
              placeholder="2672 2341 1267 2345"
              placeholderTextColor={mode ? "white" : "silver"}
              onChangeText={handleCreditCardNumberChange}
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", gap: 10 }}>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: mode ? "white" : "black",
                }}
              >
                {t("Expiry Date")}
              </Text>
              <View
                style={
                  mode ? styles.passwordContainerDark : styles.passwordContainer
                }
              >
                <TextInput
                  style={mode ? styles.inputStyleDark : styles.inputStyle}
                  autoCorrect={false}
                  placeholder="12/27/1995"
                  placeholderTextColor={mode ? "white" : "silver"}
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: mode ? "white" : "black",
                }}
              >
                CVV
              </Text>
              <View
                style={
                  mode ? styles.passwordContainerDark : styles.passwordContainer
                }
              >
                <TextInput
                  style={mode ? styles.inputStyleDark : styles.inputStyle}
                  autoCorrect={false}
                  placeholder="264"
                  maxLength={3}
                  keyboardType="numeric"
                  placeholderTextColor={mode ? "white" : "silver"}
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
    </ScrollView>
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
    color: "white",
  },
});
