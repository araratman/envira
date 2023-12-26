import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Cart from "./Cart";
import Profile from "./Profile";
import Home from "./Home";
import Orders from "./Orders";
import Wallet from "./Wallet";
import { useAppSelector } from "../../../state/hooks";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  const {mode} = useAppSelector((state) => state.mode)

  return (
    <Tab.Navigator  screenOptions={{ tabBarActiveTintColor: mode ? "white" : "black" }}>
     
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: "silver",
            color: "white",
            fontSize: 12,
          },
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="basket-outline" size={30} color={color} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: "silver",
            color: "white",
            fontSize: 12,
          },
          headerShown: false,
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={30} color={color} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: "silver",
            color: "white",
            fontSize: 12,
          },
          headerShown: false,
        }}
        name="Orders"
        component={Orders}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={30} color={color} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: "silver",
            color: "white",
            fontSize: 12,
          },
          headerShown: false,
        }}
        name="Wallet"
        component={Wallet}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={30} color={color} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
