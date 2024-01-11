import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";
import { SearchModal } from "../components/SearchModal";

export default function Results({ navigation, route }: any) {
  const [isOpen, setIsOpen]:any = useState(false);
  const [filteredData, setFilteredData] = useState(route.params)
  const { t } = useTranslation();
  const { mode } = useAppSelector((state) => state.mode);
  const {products} = useAppSelector((state) => state.products)

useEffect(()=>{
    setFilteredData(products)
},[products])

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: mode ? "#181A20" : "white",
          flex: 1,
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
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
            style={
              mode ? styles.passwordContainerDark : styles.passwordContainer
            }
          >
            <Ionicons name="search-outline" size={20} color={"silver"} />
            <TextInput
              onSubmitEditing={Keyboard.dismiss}
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry={false}
              placeholderTextColor={mode ? "silver" : "black"}
              placeholder="Search"
            />
            <TouchableOpacity onPress={() => { Keyboard.dismiss(),setTimeout(() => {
         setIsOpen(!isOpen)
       }, 100)}}>
              <Ionicons
                name={"options-outline"}
                size={20}
                color={mode ? "white" : "black"}
              />
            </TouchableOpacity>
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
              {t("Results for")} "Electronics"
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: mode ? "white" : "black",
              }}
            >
              {filteredData.length} {t("founds")}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 15,
              marginVertical: 20,
              paddingHorizontal: 20,
            }}
          >
             {filteredData && filteredData?.map((el: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ width: "46%" }}
                  onPress={() => navigation.navigate("SingleItem")}
                >
                  <View key={index} style={{ width: "100%" }}>
                    <ImageBackground
                      source={{ uri: el.images[0] }}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: 150,
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          right: 10,
                          top: 10,
                          padding: 6,
                          borderRadius: 20,
                          backgroundColor: "black",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="heart-o" size={20} color="white" />
                      </View>
                    </ImageBackground>
                    <View>
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: 16,
                          fontWeight: "bold",
                          color: mode ? "white" : "black",
                        }}
                      >
                        {el.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginVertical: 5,
                        }}
                      >
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
                          <Text style={{ color: "silver" }}>{el.rating}</Text>
                        </View>
                        <View
                          style={{
                            height: 10,
                            width: 2,
                            backgroundColor: "silver",
                          }}
                        ></View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 2,
                            backgroundColor: mode ? "#1F222A" : "silver",
                            borderRadius: 5,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: mode ? "white" : "black",
                            }}
                          >
                            {el.sold} {t("sold")}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: mode ? "white" : "black",
                        }}
                      >
                        ${el.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        {isOpen && (
          <TouchableOpacity
            style={{
              position: "absolute",
              flex: 1,
              zIndex: 20,
              backgroundColor: "black",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.5,
            }}
            onPress={() => setIsOpen(!isOpen)}
          ></TouchableOpacity>
        )}
        {isOpen && <SearchModal setIsOpen={setIsOpen} setFilteredData={setFilteredData} />}
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
    marginTop: "5%",
  },
  passwordContainerDark: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1F222A",
    borderRadius: 10,
    marginTop: "5%",
  },
  inputStyle: {
    flex: 1,
  },
});
