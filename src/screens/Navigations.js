import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Events, Settings, Assignments } from ".";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Assignments" component={Assignments} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
