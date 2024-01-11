import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { Formik } from "formik";
import { addNewUserThunk } from "../state/features/user/userApi";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { useTranslation } from "react-i18next";

export default function SignUp({ navigation }: any) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch()

  const icons = [
    {
      id: 1,
      text: "Continue with Facebook",
      image: require("../assets/images/social-icons/facebook.png"),
    },
    {
      id: 2,
      text: "Continue with Google",
      image: require("../assets/images/social-icons/google.png"),
    },
    {
      id: 3,
      text: "Continue with Apple",
      image: require("../assets/images/social-icons/apple.png"),
    },
  ];

  const onSubmit = async (values: any) => {
    dispatch(addNewUserThunk(values))

  };

  const {t} = useTranslation()
  const {mode} = useAppSelector((state)=> state.mode)

  return (
    <View style={{ flex: 1, paddingHorizontal: 20,backgroundColor: mode ? "#181A20" : "white", }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color={mode ? "white" : "black"} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontWeight: "bold", fontSize: 38, marginTop: "15%",color: mode ? "white" : "black", }}>
          {t("Create your Account")}
        </Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            avatar: "https://picsum.photos/800",
          }}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View style={{ flexDirection: "column", marginTop: 30, gap: 20 }}>
                <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
                  <Ionicons
                    name="person"
                    size={20}
                    color={values.name.length > 0 ? "black" : "#DFDFDF"}
                  />
                  <TextInput
                    style={mode ? styles.inputStyleDark : styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholderTextColor={mode ? 'silver' : 'black'}
                  />
                </View>
                <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
                  <Ionicons
                    name="mail"
                    size={20}
                    color={values.email.length > 0 ? "black" : "#DFDFDF"}
                  />
                  <TextInput
                    style={mode ? styles.inputStyleDark : styles.inputStyle}
                    autoCorrect={false}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholderTextColor={mode ? 'silver' : 'black'}
                    inputMode="email"
                  />
                </View>
                <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={values.password.length > 0 ? "black" : "#DFDFDF"}
                  />
                  <TextInput
                    style={mode ? styles.inputStyleDark : styles.inputStyle}
                    autoCorrect={false}
                    secureTextEntry={!show}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholderTextColor={mode ? 'silver' : 'black'}
                  />
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Ionicons
                      name={!show ? "eye" : "eye-off"}
                      size={20}
                      color={values.password.length > 0 ? "black" : "#DFDFDF"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 15,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={mode ? "white" : "black"}
                />
                <Text style={{color: mode ? "white" : "black",}}>{t("Remember me")}</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    minWidth: "100%",
                    backgroundColor: mode ? 'white' : "black",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    padding: 15,
                  }}
                  onPress={() => handleSubmit()}
                >
                  <Text style={{ color: mode ? "black" : "white", }}>{t("Sign up")}</Text>
                </TouchableOpacity>
                {/* <Text style={{ fontWeight: "bold", marginTop: 15 }}>
                  {t("Forgot the password?")}
                </Text> */}
              </View>
            </>
          )}
        </Formik>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#F2F2F2" }} />
          <View>
            <Text
              style={{
                textAlign: "center",
                color: mode ? 'white' : "#616161",
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              {t("or continue with")}
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#F2F2F2" }} />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {icons.map((el: any, index: any) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 15,
                  borderWidth: 1,
                  borderColor: mode ? '#35383F' : "#F2F2F2",
                  borderRadius: 20,
                }}
                key={index}
              >
                <Image
                  source={el.image}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 15,
                    objectFit: "contain",
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            marginVertical: 25,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "silver" }}>{t("Already have an account?")}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
            <Text style={{ color: mode ? "white" : "black" }}> {t("Sign in")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  passwordContainerDark: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1F222A",
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
  },
  inputStyleDark: {
    flex: 1,
    color: "white"
  },
});
