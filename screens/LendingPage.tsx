import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";

export default function LendingPage({navigation}: any) {
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

  const {t} = useTranslation()

  const {mode} = useAppSelector((state)=>state.mode)

  return (
    <View style={{ flex: 1, backgroundColor: mode ? "#181A20" : "white", }}>
      <Image
        source={require("../assets/images/landing.jpg")}
        style={{
          height: 250,
          width: "100%",
          borderRadius: 15,
          objectFit: "contain",
          marginTop: "10%",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 34,
          fontWeight: "bold",
          marginBottom: 20,
          color: mode ? "white" : "black",
        }}
      >
        {t("Let's you in")}
      </Text>
      <View style={{ paddingHorizontal: 30 }}>
        {icons.map((el: any, index: any) => {
          return (
            <TouchableOpacity
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: mode ? "#35383F" : "#F2F2F2",
                borderRadius: 20,
                backgroundColor: mode ? "#1F222A" : "white",
              }}
              key={index}
            >
              <Image
                source={el.image}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 15,
                  objectFit: "contain",
                }}
              />
              <Text style={{color: mode ? "white" : "black",}}>{el.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 30,
          marginVertical: 15,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#F2F2F2" }} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: "center",
              color: mode ? 'white' : "#616161",
              fontSize: 16,
            }}
          >
            {t('or')}
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#F2F2F2" }} />
      </View>
      <View style={{ alignItems: "center", paddingHorizontal: 30 }}>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: mode ? "white" : "black",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            padding: 15,
          }}
          onPress={()=> navigation.navigate("Sign In")}
        >
          <Text style={{ color: mode ? "black" : "white",}}>{t("Sign in with password")}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 25, alignItems: "center", flexDirection:'row', justifyContent:'center' }}>
        <Text style={{ color: "silver"}}>
          {t("Don't have an account?")}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={{ color: mode ? "white" : "black", }}> {t("Sign up")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
