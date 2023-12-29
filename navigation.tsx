import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./app/tabs/bottom/_layout";
import { NavigationContainer } from "@react-navigation/native";
import LendingPage from "./screens/LendingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SearchBar from "./screens/SearchBar";
import Results from "./screens/Results";
import NotFound from "./screens/NotFound";
import SearchResult from "./screens/SearchResult";
import SingleItem from "./screens/SingleItem";
import Address from "./screens/profileScreens/Address";
import EditProfile from "./screens/profileScreens/EditProfile";
import HelpCenter from "./screens/profileScreens/HelpCenter";
import InviteFriends from "./screens/profileScreens/InviteFriends";
import Language from "./screens/profileScreens/Language";
import Notification from "./screens/profileScreens/Notification";
import Payment from "./screens/profileScreens/Payment";
import PrivacyPolicy from "./screens/profileScreens/PrivacyPolicy";
import Security from "./screens/profileScreens/Security";
import AddNewCard from "./screens/profileScreens/AddNewCard";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { getLanguage } from "./helper";
import { getMode } from "./state/features/mode/modeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLogginUser } from "./state/features/user/userApi";

const Stack = createNativeStackNavigator();

function AuthScreens({ theme }: any) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Lending" component={LendingPage} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreens() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchBar"
          component={SearchBar}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Results"
          component={Results}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NotFound"
          component={NotFound}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchResult"
          component={SearchResult}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SingleItem"
          component={SingleItem}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Address"
          component={Address}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HelpCenter"
          component={HelpCenter}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="InviteFriends"
          component={InviteFriends}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Language"
          component={Language}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Security"
          component={Security}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddNewCard"
          component={AddNewCard}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const { user } = useAppSelector((state: any) => state.user);
  const { mode } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getMode());
    dispatch(getLogginUser())
    getLanguage();
  }, []);

  const MyTheme = mode
    ? {
        dark: true,
        colors: {
          primary: "red",
          background: "#181A20",
          card: "#181A20",
          text: "#9E9E9E",
          border: "#181A20",
          notification: "umber",
        },
      }
    : {
        dark: false,
        colors: {
          primary: "rgb(255, 45, 85)",
          background: "rgb(242, 242, 242)",
          card: "rgb(255, 255, 255)",
          text: "rgb(28, 28, 30)",
          border: "rgb(199, 199, 204)",
          notification: "rgb(255, 69, 58)",
        },
      };

  return (
    <>
      {!user?.id ? (
        <AuthScreens theme={MyTheme} />
      ) : (
        <NavigationContainer
        theme={MyTheme}
          children={
            <Stack.Navigator
              children={
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="MainScreens"
                  component={MainScreens}
                />
              }
            />
          }
        ></NavigationContainer>
      )}
    </>
  );
}
