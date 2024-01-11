import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMode } from "../state/features/mode/modeApi";
import { logOut } from "../state/features/user/userSlice";

export default function Profile({ navigation }: any) {
  const { user } = useAppSelector((state) => state.user);
  const { mode } = useAppSelector((state) => state.mode);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [offsety, setOffsety] = useState(0)

  const editList = [
    {
      id: 1,
      name: t("Edit Profile"),
      component: "EditProfile",
      icon: "person-outline",
    },
    {
      id: 2,
      name: t("Address"),
      component: "Address",
      icon: "location-outline",
    },
    {
      id: 3,
      name: t("Notification"),
      component: "Notification",
      icon: "notifications-outline",
    },
    { id: 4, name: t("Payment"), component: "Payment", icon: "wallet-outline" },
    {
      id: 5,
      name: t("Security"),
      component: "Security",
      icon: "shield-outline",
    },
    {
      id: 6,
      name: t("Language"),
      component: "Language",
      icon: "language-outline",
    },
    { id: 7, name: t("Dark Mode"), component: "", icon: "eye-outline" },
    {
      id: 8,
      name: t("Privacy Policy"),
      component: "PrivacyPolicy",
      icon: "lock-closed-outline",
    },
    {
      id: 9,
      name: t("Help Center"),
      component: "HelpCenter",
      icon: "information-circle-outline",
    },
    {
      id: 10,
      name: t("Invite Friends"),
      component: "InviteFriends",
      icon: "people-outline",
    },
    { id: 11, name: t("Logout"), component: "", icon: "log-out-outline" },
  ];

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = async () => {
    setIsEnabled(!isEnabled);
    await AsyncStorage.setItem("mode", JSON.stringify(!isEnabled));
    dispatch(getMode());
  };

  useEffect(() => {
    setIsEnabled(mode);
  }, [mode]);

  const selectOption = async (el: any) => {
    el.id == 11
      ? (await AsyncStorage.removeItem('user'), dispatch(logOut())) 
      : el.id == 7
      ? toggleSwitch()
      : navigation.navigate(el.component);
  };

  // const handleScroll = (event:any) => {
    
  //     changeImageHeight()
    
   
  // };

  const animatedHeight:any = useRef(new Animated.Value(160)).current;
  
  const changeImageHeight = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
      if(offsetY >= 30 ){
        Animated.timing(animatedHeight, {
          toValue: 80, 
          duration: 80,
          useNativeDriver: false,
        }).start()
      }else if(offsetY < 30){
        Animated.timing(animatedHeight, {
          toValue: 160, 
          duration: 80,
          useNativeDriver: false,
        }).start();
      }
 
  };


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
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons name={"logo-edge"} size={32} color={mode ? "white" : "black"} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: mode ? "white" : "black", }}>
            {t("Profile")}
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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{alignItems:'center'}}>
          <View>
            <Animated.Image
              style={{ borderRadius: 80, width: animatedHeight, height: animatedHeight  }}
              source={{
                uri: user.avatar,
              }}
            />
            <Ionicons
              style={{ position: "absolute", right: 10, bottom: 0 }}
              name={"create"}
              size={24}
              color={mode ? "white" : "black"}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 10,
              color: mode ? "white" : "black",
            }}
          >
            {user.name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: mode ? "white" : "black",
            }}
          >
            +1 111 467 378 399
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#F3F3F3",
          marginVertical: 20,
        }}
      ></View>
      <ScrollView onScroll={changeImageHeight} showsVerticalScrollIndicator={false}>
        {editList.map((el: any, index: any) => {
          return (
            <TouchableOpacity key={index + 1} onPress={() => selectOption(el)}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 9,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={el.icon}
                    size={24}
                    color={el.id == 11 ? "#F75555" : mode ? "white" : "black"}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: el.id == 11 ? "#F75555" : mode ? "white" : "black",
                    }}
                  >
                    {el.name}
                  </Text>
                </View>
                {el.id !== 11 && el.id !== 7 && (
                  <Ionicons
                    name={"chevron-forward"}
                    size={22}
                    color={mode ? "white" : "black"}
                  />
                )}
                {el.id == 7 && (
                  <Switch
                    trackColor={{ false: "#767577", true: "silver" }}
                    thumbColor={isEnabled ? "#767577" : "#767577"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
