import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import getMapStyle from "../../constants/helper";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";
import { useAppSelector } from "../../state/hooks";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function Address({ navigation }: any) {
  const [initialRegion, setInitialRegion]: any = useState<Region | null>(null);
  const [city, setCity]: any = useState();
  const [openModal, setOpenModal] = useState(true);
  const { t } = useTranslation();
  const { mode } = useAppSelector((state) => state.mode);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0021,
        longitudeDelta: 0.0021,
      });
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      response && setCity(response[0]);
    } catch (error: any) {
      console.log("Error getting location:", error.message);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleMapPress = async (event: any) => {
    const { coordinate } = event.nativeEvent;
    const data = {
      ...coordinate,
      latitudeDelta: 0.0021,
      longitudeDelta: 0.0021,
    };

    let response = await Location.reverseGeocodeAsync(coordinate);
    response && setCity(response[0]);
    setInitialRegion(data);
  };


  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["60%","5%","60%"];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: mode ? "#181A20" : "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 55,
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
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
              {t("Add New Address")}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <MapView
            userInterfaceStyle={mode ? "dark" : "light"}
            onPress={(e) => handleMapPress(e)}
            customMapStyle={getMapStyle(mode)}
            style={{ flex: 1 }}
            initialRegion={initialRegion && initialRegion}
            region={initialRegion}
          >
            {initialRegion && (
              <Marker
                coordinate={initialRegion && initialRegion}
                title="Your Location"
              />
            )}
          </MapView>
        </View>
      </View>
      <BottomSheet  ref={sheetRef} snapPoints={snapPoints} >
        <BottomSheetView style={{backgroundColor: mode ? "#181A20" : "transparent",}}>
          <View
            style={{
              zIndex: 21,
              height: 450,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  backgroundColor: mode ? "#181A20" : "white",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 2,
                  height: 20,
                  marginTop: 10,
                }}
              >

              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: mode ? "white" : "black",
                }}
              >
                Address Details
              </Text>
              <View style={{ paddingHorizontal: 20 }}>
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#E0E0E0",
                    marginVertical: 15,
                  }}
                ></View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: mode ? "white" : "black",
                  }}
                >
                  Name Address
                </Text>
                <View
                  style={{
                    padding: 15,
                    width: "100%",
                    backgroundColor: mode ? "#1F222A" : "#FAFAFA",
                    borderRadius: 15,
                    marginVertical: 15,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      color: mode ? "white" : "black",
                    }}
                  >
                    Apartment
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: mode ? "white" : "black",
                  }}
                >
                  Address Detalis
                </Text>
                <View
                  style={{
                    padding: 15,
                    width: "100%",
                    backgroundColor: mode ? "#1F222A" : "#FAFAFA",
                    borderRadius: 15,
                    marginVertical: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      color: mode ? "white" : "black",
                    }}
                  >
                    {city?.region && city.region + ","}{" "}
                    {city?.street && city.street + ","}{" "}
                    {city?.streetNumber && city.streetNumber}
                  </Text>
                  <TouchableOpacity onPress={() => getCurrentLocation()}>
                    <Ionicons
                      name={"location"}
                      size={22}
                      color={mode ? "white" : "black"}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  <Checkbox
                    status={"checked"}
                    color={mode ? "white" : "black"}
                  />
                  <Text
                    style={{
                      fontWeight: "600",
                      color: mode ? "white" : "black",
                    }}
                  >
                    Make this as the default address
                  </Text>
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
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Text style={{ color: mode ? "black" : "white" }}>
                    {t("Add")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
