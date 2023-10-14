import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Events, Settings, Assignments, LoadingScreen } from ".";
import { StatusBar } from "expo-status-bar";
import { initUserData } from "../utils/handleUserData";
import {
  IconEventsActive,
  IconEventsInactive,
  IconHomeActive,
  IconHomeInactive,
  IconSettingsActive,
  IconSettingsInactive,
  IconWorkActive,
  IconWorkInactive,
} from "../components/icons";
import { Platform } from "react-native";

const MAIN_HEIGHT = 60;

const Tab = createBottomTabNavigator();

export default function Navigations() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleUserData = async () => {
      const { status } = await initUserData();
      if (status) setLoaded(true);
    };

    handleUserData();
  }, []);

  if (loaded)
    return (
      <>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#0F0F0F",
              borderTopWidth: 0,
              height: Platform.OS === "ios" ? MAIN_HEIGHT + 40 : MAIN_HEIGHT,
              paddingVertical: 5,
            },
            tabBarActiveTintColor: "#0D9FDB",
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Gabarito-Regular",
              paddingBottom: 8,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <IconHomeActive /> : <IconHomeInactive />;
              },
            }}
          />
          <Tab.Screen
            name="Events"
            component={Events}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IconEventsActive /> : <IconEventsInactive />,
            }}
          />
          <Tab.Screen
            name="Assignments"
            component={Assignments}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IconWorkActive /> : <IconWorkInactive />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IconSettingsActive /> : <IconSettingsInactive />,
            }}
          />
        </Tab.Navigator>
      </>
    );
  return <LoadingScreen />;
}
