import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../state/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchModal } from "../components/SearchModal";

export default function SearchBar({ navigation }: any) {

  const [editedSearch, setEditedSearch]: any = useState([]);
  const [filteredData, setFilteredData] = useState('')
  const [isOpen, setIsOpen]:any = useState(false);
  const [searchData, setSearchData] = useState([
    { id: 12, key: "Handmade" },
    { id: 13, key: "Snage Skin Bag" },
    { id: 14, key: "Snake Skin Bagggg" },
  ]);
  const { t } = useTranslation();
  const { products } = useAppSelector((state) => state.products);
  const { mode } = useAppSelector((state) => state.mode);

  useEffect(() => {
    getSearchData();
  }, []);

  async function getSearchData() {
    const data = await AsyncStorage.getItem("searchData");
    data && setSearchData(JSON.parse(data));
  }

  const submitInputEdit = async (e: any) => {
    let edited = products.filter((el: any) => {
      
      if (el.title.toLowerCase().includes(e.nativeEvent.text.toLowerCase())) {
        return el;
      }
    });

    
    edited.length > 0
      ? navigation.navigate("Results", edited)
      : navigation.navigate("NotFound", {key: e.nativeEvent.text});
    const data = searchData?.filter((el) => {
      if (el?.key.toLowerCase() == e.nativeEvent.text.toLowerCase()) {
        return el;
      }
    });
    if (data.length > 0) {
      return;
    } else {
        searchData.length > 0 ? await AsyncStorage.setItem(
          "searchData",
          JSON.stringify([...searchData, { id: Date.now(), key: e.nativeEvent.text }])
        ):await AsyncStorage.setItem(
          "searchData",
          JSON.stringify([{ id: Date.now(), key: e.nativeEvent.text }])
        );
      const updatedData = await AsyncStorage.getItem("searchData");
      updatedData && setSearchData(JSON.parse(updatedData));
    }

  
  };

  const onChangeText = (e: any) => {
    if (e !== "") {
      let edited = searchData.filter((el: any) => {
        if (el.key.toLowerCase().includes(e.toLowerCase())) {
          return el;
        }
      });
      edited ? setEditedSearch(edited) : setEditedSearch([]);
    } else {
      setEditedSearch([]);
    }
  };

  const search = (elem: any) => {
    let edited = products.filter((el: any) => {
      if (el.title.toLowerCase().includes(elem.key.toLowerCase())) {
        return el;
      }
    });
    edited.length > 0
      ? navigation.navigate("Results", edited)
      : navigation.navigate("NotFound", elem);
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: mode ? "#181A20" : "white",
        flex:1
      }}
    >
      <View
        style={mode ? styles.passwordContainerDark : styles.passwordContainer}
      >
        <Ionicons name="search-outline" size={20} color={"silver"} />
        <TextInput
          onSubmitEditing={(e) => submitInputEdit(e)}
          onChangeText={(e) => onChangeText(e)}
          style={mode ? styles.inputStyleDark : styles.inputStyle}
          autoCorrect={false}
          secureTextEntry={false}
          placeholder="Search"
          placeholderTextColor={mode ? "silver" : "black"}
          autoFocus={true}
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
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: mode ? "white" : "black",
            }}
          >
            {t("Recent")}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: mode ? "white" : "black",
            }}
          >
            {t("Clear All")}
          </Text>
        </View>
        <View
          style={{ height: 1, width: "100%", backgroundColor: "silver" }}
        ></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 10 }}
        >
          {editedSearch &&
            editedSearch.map((el: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    search(el);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={{ color: "silver", fontWeight: "500" }}>
                      {el?.key}
                    </Text>
                    <Ionicons
                      name="close-circle-outline"
                      size={26}
                      color={"silver"}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
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
        {isOpen && <SearchModal setIsOpen={setIsOpen} setFilteredData={setFilteredData} isSearchBar={true} navigation={navigation}/>}
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
    marginTop: "15%",
  },
  passwordContainerDark: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1F222A",
    borderRadius: 10,
    marginTop: "15%",
  },
  inputStyle: {
    flex: 1,
  },
  inputStyleDark: {
    flex: 1,
    color: 'white'
  },
});
