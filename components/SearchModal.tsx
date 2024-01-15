import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { useTranslation } from "react-i18next";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  filterProducts,
  getProducts,
} from "../state/features/products/productsApi";

export const SearchModal = React.memo(
  ({ setIsOpen, setFilteredData, isSearchBar, navigation }: any) => {
    const [minPrice, setMinPrice] = useState(5);
    const [maxPrice, setMaxPrice] = useState(300);
    const [category, setCategory]: any = useState(null);
    const [sort, setSort]: any = useState(null);
    const [rating, setRating]: any = useState(null);
    const { t } = useTranslation();
    const { mode } = useAppSelector((state) => state.mode);
    const { categories, products } = useAppSelector((state) => state.products);
    const filters = [{ id: 0, name: "All", image: "" }, ...categories];
    const width = Dimensions.get("window").width;
    const dispatch = useAppDispatch();

    const onSliderValuesChange = (values: any) => {
      const [min, max] = values;
      setMinPrice(min);
      setMaxPrice(max);
    };

    const filter1 = [
      { id: 1, filter: "Popular" },
      { id: 2, filter: "Most Recent" },
      { id: 3, filter: "Price High" },
      { id: 4, filter: "Price aaa" },
      { id: 5, filter: "Price bbb" },
    ];

    const filterRating = [
      { id: 1, rating: "All" },
      { id: 2, rating: 5 },
      { id: 3, rating: 4 },
      { id: 4, rating: 3 },
      { id: 5, rating: 2 },
      { id: 6, rating: 1 },
    ];

    const aplyFilter = () => {
      dispatch(
        filterProducts({ min: minPrice, max: maxPrice, category: category })
      );
      isSearchBar
        ? navigation.navigate("Results", products)
        : (setFilteredData(products), setIsOpen(false));
    };

    return (
      <Animated.View
        style={{
          backgroundColor: mode ? "#181A20" : "transparent",
          zIndex: 21,
          height: 620,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
        }}
        exiting={SlideOutDown.springify()}
        entering={SlideInDown.springify().damping(100)}
      >
        <View
          style={{
            width: "100%",
            height: 620,
            backgroundColor: mode ? "#181A20" : "white",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <TouchableOpacity onPress={() => setIsOpen(false)}>
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
              <View
                style={{ width: 70, height: 2, backgroundColor: "silver" }}
              ></View>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 10,
              color: mode ? "white" : "black",
            }}
          >
            {t("Sort & Filter")}
          </Text>
          <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "silver" }}
            ></View>

            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 10,
                color: mode ? "white" : "black",
              }}
            >
              {t("Categories")}
            </Text>
            <View>
              <FlatList
                data={filters}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item?.id.toString()}
                renderItem={({ item }: any) => (
                  <View
                    style={{
                      borderWidth: 2,
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      marginRight: 15,
                      borderRadius: 25,
                      height: 35,
                      borderColor: mode ? "white" : "black",
                      backgroundColor: mode
                        ? category == item.id
                          ? "white"
                          : "black"
                        : category == item.id
                        ? "black"
                        : "white",
                    }}
                  >
                    <TouchableOpacity onPress={() => setCategory(item.id)}>
                      <Text
                        style={{
                          fontWeight: "600",
                          color: mode
                            ? category == item.id
                              ? "black"
                              : "white"
                            : category == item.id
                            ? "white"
                            : "black",
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                horizontal={true}
                pagingEnabled={true}
              />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 10,
                color: mode ? "white" : "black",
              }}
            >
              {t("Price Range")}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text
                style={{ fontWeight: "600", color: mode ? "white" : "black" }}
              >
                {minPrice}
              </Text>
              <Text
                style={{ fontWeight: "600", color: mode ? "white" : "black" }}
              >
                {maxPrice}
              </Text>
            </View>
            <MultiSlider
              values={[0, 1000]}
              sliderLength={width - 40}
              min={minPrice}
              max={maxPrice}
              step={10}
              markerStyle={mode ? styles.markerDark : styles.marker}
              trackStyle={styles.track}
              selectedStyle={
                mode ? styles.selectedTrackDark : styles.selectedTrack
              }
              onValuesChange={onSliderValuesChange}
            />
            <View style={{ width: "100%", height: 350 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginVertical: 10,
                  color: mode ? "white" : "black",
                }}
              >
                {t("Sort By")}
              </Text>
              <FlatList
                data={filter1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) => (
                  <View
                    style={{
                      borderWidth: 2,
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      marginRight: 15,
                      borderRadius: 25,
                      height: 35,
                      borderColor: mode ? "white" : "black",
                      backgroundColor: mode
                        ? sort == item.id
                          ? "white"
                          : "black"
                        : sort == item.id
                        ? "black"
                        : "white",
                    }}
                  >
                    <TouchableOpacity onPress={() => setSort(item.id * 10)}>
                      <Text
                        style={{
                          fontWeight: "600",
                          color: mode
                            ? sort == item.id
                              ? "black"
                              : "white"
                            : sort == item.id
                            ? "white"
                            : "black",
                        }}
                      >
                        {item.filter}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                horizontal={true}
                pagingEnabled={true}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  marginVertical: 10,
                  color: mode ? "white" : "black",
                }}
              >
                {t("Rating")}
              </Text>
              <FlatList
                data={filterRating}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) => (
                  <TouchableOpacity
                    onPress={() => setRating(item.id)}
                    style={{
                      borderWidth: 2,
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      marginRight: 15,
                      borderRadius: 25,
                      height: 35,
                      flexDirection: "row",
                      gap: 3,
                      alignItems: "center",
                      borderColor: mode ? "white" : "black",
                      backgroundColor: mode
                        ? rating == item.id
                          ? "white"
                          : "black"
                        : rating == item.id
                        ? "black"
                        : "white",
                    }}
                  >
                    <Icon
                      name="star"
                      size={16}
                      color={
                        mode
                          ? rating == item.id
                            ? "black"
                            : "white"
                          : rating == item.id
                          ? "white"
                          : "black"
                      }
                    />
                    <Text
                      style={{
                        fontWeight: "600",
                        color: mode
                          ? rating == item.id
                            ? "black"
                            : "white"
                          : rating == item.id
                          ? "white"
                          : "black",
                      }}
                    >
                      {item.rating}
                    </Text>
                  </TouchableOpacity>
                )}
                horizontal={true}
                pagingEnabled={true}
              />
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "silver",
                  marginBottom: 25,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 15,
                  justifyContent: "center",
                  marginBottom: 25,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: mode ? "#1F222A" : "silver",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    padding: 15,
                  }}
                  onPress={() => {
                    dispatch(getProducts(0));
                    setFilteredData(products);
                    setIsOpen(false);
                  }}
                >
                  <Text style={{ color: mode ? "white" : "black" }}>
                    {t("Reset")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: mode ? "white" : "black",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    padding: 15,
                  }}
                  onPress={() => aplyFilter()}
                >
                  <Text style={{ color: mode ? "black" : "white" }}>
                    {t("Apply")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "black",
    height: 20,
    width: 20,
  },
  markerDark: {
    backgroundColor: "white",
    height: 20,
    width: 20,
  },
  track: {
    backgroundColor: "#E2E2E2",
  },
  selectedTrack: {
    backgroundColor: "black",
    height: 3,
  },
  selectedTrackDark: {
    backgroundColor: "white",
    height: 3,
  },
});
