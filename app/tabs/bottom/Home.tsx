import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Slider from "../../../components/Slider";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { getProducts } from "../../../state/features/products/productsApi";
import { useTranslation } from "react-i18next";

export default function Home({ navigation }: any) {
  const { categories, products } = useAppSelector((state) => state.products);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const filters = [{ id: 0, item: "All", icon: "" }, ...categories];
  const { mode } = useAppSelector((state) => state.mode);
  useEffect(() => {
    dispatch(getProducts(0));
  }, []);

  
  const filter = (id: any) => {
    dispatch(getProducts(id));
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: mode ? "#181A20" : "white",
        flex: 1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Image
              source={{
                uri: user.avatar,
              }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <View>
              <Text style={{ color: "silver" }}>{user.role}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: mode ? "white" : "black", }}>
                {user.name}
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Ionicons name="notifications-outline" size={30} color={mode ? "white" : "#000"} />
            <Ionicons name="heart-outline" size={30} color={mode ? "white" : "#000"} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SearchBar")}>
          <View style={mode ? styles.passwordContainerDark : styles.passwordContainer}>
            <Ionicons name="search-outline" size={20} color={"silver"} />
            <TextInput
              style={mode ? styles.inputStyleDark : styles.inputStyle}
              autoCorrect={false}
              secureTextEntry={false}
              placeholder="Search"
              placeholderTextColor={mode ? 'silver' : 'black'}
              editable={false}
            />
            <Ionicons name={"options-outline"} size={20} color={mode ? "white" : "black"} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20,color: mode ? "white" : "black", }}>
            {t("Special Offers")}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18,color: mode ? "white" : "black", }}>
            {t("See All")}
          </Text>
        </View>
        <Slider styles={styles} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginVertical: 15,
          }}
        >
          {categories.map((el: any, index: any) => {
            return (
              <View
                key={index}
                style={{
                  width: 80,
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: mode ? '#1F222A' : "#EBEBEB",
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 45,
                    width: 60,
                    height: 60,
                  }}
                >
                  <Icon name={el.icon} size={28} color={mode ? "white" : "black"} />
                </View>
                <Text style={{ color: mode ? "white" : "black",}}>{el.item}</Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontWeight: "bold",color: mode ? "white" : "black", }}>{t("Most Popular")}</Text>
          <Text style={{ fontWeight: "bold",color: mode ? "white" : "black", }}>{t("See All")}</Text>
        </View>
        <FlatList
          data={filters}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }: any) => (
            <TouchableOpacity onPress={() => filter(item?.id)}>
              <View
                style={{
                  borderWidth: 2,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  marginRight: 15,
                  borderRadius: 25,
                  borderColor: mode ? 'white' : 'black'
                }}
              >
                <Text style={{ fontWeight: "600",color: mode ? "white" : "black" }}>{item.item}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal={true}
          pagingEnabled={true}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
            marginVertical: 20,
          }}
        >
          {products &&
            products.map((el: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ width: "46%" }}
                  onPress={() => navigation.navigate("SingleItem")}
                >
                  <View style={{ width: "100%" }}>
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
                          <Text style={{ color: "silver" }}>3</Text>
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
                            backgroundColor: mode ? '#1F222A' : "#ECECEC",
                            borderRadius: 5,
                          }}
                        >
                          <Text style={{ fontSize: 12, color: mode ? "white" : "black", }}>
                            {el.sold} {t("sold")}
                          </Text>
                        </View>
                      </View>
                      <Text style={{ fontSize: 16, fontWeight: "bold", color: mode ? "white" : "black", }}>
                        ${el.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
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
    marginTop: "5%",
  },
  inputStyle: {
    flex: 1,
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
  inputStyleDark: {
    flex: 1,
    color: 'white'
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  styleForSlider: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    borderRadius: 15,
  },
});
