import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Slider from "../components/Slider";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";

export default function SingleItem({ navigation, route }: any) {
  const { t } = useTranslation();
  const { mode } = useAppSelector((state) => state.mode);
  
  return (
    <View style={{ backgroundColor: mode ? "#181A20" : "white", flex: 1 }}>
      <ScrollView>
        <Slider styles={styles} isGoBack={true} navigation={navigation} carouselData={route.params.images}/>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: mode ? "white" : "black",
              }}
            >
              Venesa Long Shirt
            </Text>
            <Ionicons
              name="heart-outline"
              size={30}
              color={mode ? "white" : "black"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                backgroundColor: mode ? "#1F222A" : "#ECECEC",
                borderRadius: 5,
                width: "25%",
              }}
            >
              <Text style={{ color: mode ? "white" : "black" }}>
                9700 {t("sold")}
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Icon
                  name="star-half-empty"
                  size={20}
                  color={mode ? "silver" : "black"}
                />
                <Text style={{ color: mode ? "white" : "black" }}>
                  4.8 (4700 {t("reviews")})
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#F3F3F3" }}
          ></View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginVertical: 5,
              color: mode ? "white" : "black",
            }}
          >
            {t("Description")}
          </Text>
          <Text style={{ color: mode ? "white" : "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            blanditiis!
          </Text>
          <View style={{ flexDirection: "row", gap: 30, marginVertical: 5 }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginVertical: 5,
                  color: mode ? "white" : "black",
                }}
              >
                {t("Size")}
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    paddingHorizontal: 11,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: mode ? "white" : "black",
                  }}
                >
                  <Text style={{ color: mode ? "white" : "black" }}>S</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 11,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: mode ? "white" : "black",
                  }}
                >
                  <Text style={{ color: mode ? "white" : "black" }}>M</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 11,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: mode ? "white" : "black",
                  }}
                >
                  <Text style={{ color: mode ? "white" : "black" }}>L</Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginVertical: 5,
                  color: mode ? "white" : "black",
                }}
              >
                {t("Color")}
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    paddingHorizontal: 17,
                    backgroundColor: "#607D8A",
                    paddingVertical: 17,
                    borderRadius: 20,
                  }}
                ></View>
                <View
                  style={{
                    paddingHorizontal: 17,
                    backgroundColor: "#7A5548",
                    paddingVertical: 17,
                    borderRadius: 20,
                  }}
                ></View>
                <View
                  style={{
                    paddingHorizontal: 17,
                    backgroundColor: "#797979",
                    paddingVertical: 17,
                    borderRadius: 20,
                  }}
                ></View>
                <View
                  style={{
                    paddingHorizontal: 17,
                    backgroundColor: "#9E9E9E",
                    paddingVertical: 17,
                    borderRadius: 20,
                  }}
                ></View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 5,
                color: mode ? "white" : "black",
              }}
            >
              {t("Quantity")}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                backgroundColor: mode ? "#1F222A" : "#F3F3F3",
                borderRadius: 15,
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ fontSize: 20, color: mode ? "white" : "black" }}>
                -
              </Text>
              <Text style={{ fontSize: 20, color: mode ? "white" : "black" }}>
                1
              </Text>
              <Text style={{ fontSize: 20, color: mode ? "white" : "black" }}>
                +
              </Text>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#F3F3F3" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
              marginTop: 25,
            }}
          >
            <View>
              <Text style={{ fontSize: 13, color: "silver" }}>
                {t("Total price")}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: mode ? "white" : "black",
                }}
              >
                $320.00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: "50%",
                backgroundColor: mode ? "white" : "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                padding: 15,
                gap: 6,
              }}
            >
              <Ionicons
                name="add-circle-outline"
                size={20}
                color={mode ? "black" : "white"}
              />
              <Text style={{ color: mode ? "black" : "white", fontSize: 16 }}>
                {t("Add to Cart")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleForSlider: {
    width: "100%",
    height: 300,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    borderRadius: 0,
  },
});
