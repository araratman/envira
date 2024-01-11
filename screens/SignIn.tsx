import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { getUserThunk } from "../state/features/user/userApi";
import { useTranslation } from "react-i18next";

export default function SignIn({ navigation }: any) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
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
    dispatch(getUserThunk(values));
  };
  const {t} = useTranslation()
  const {mode} = useAppSelector((state)=> state.mode)
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: mode ? "#181A20" : "white", }}>
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
      <Text style={{ fontWeight: "bold", fontSize: 38, marginTop: "15%",color: mode ? "white" : "black", }}>
        {t("Login to your Account")}
      </Text>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={{ flexDirection: "column", marginTop: 30, gap: 20 }}>
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
                  placeholderTextColor={mode ? 'silver' : 'black'}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                  secureTextEntry={show ? false : true}
                  placeholder="Password"
                  placeholderTextColor={mode ? 'silver' : 'black'}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShow(!show);
                  }}
                >
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
                marginVertical: 20,
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
                  backgroundColor: mode ? "white" : "black",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                  padding: 15,
                }}
                onPress={() => handleSubmit()}
              >
                <Text style={{ color:mode ? "black" : "white" }}>{t("Sign in")}</Text>
              </TouchableOpacity>
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
                marginVertical: 10,
                padding: 15,
                borderWidth: 1,
                borderColor: "#F2F2F2",
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
          marginTop: 25,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "silver" }}>{t("Don't have an account?")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={{ color: mode ? "white" : "black" }}> {t("Sign up")}</Text>
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
