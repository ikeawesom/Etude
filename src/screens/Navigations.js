import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Events, Settings, Assignments, LoadingScreen } from ".";
import { StatusBar } from "expo-status-bar";
import { initUserData } from "../utils/handleUserData";

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
              height: 60,
            },
            tabBarActiveTintColor: "#0D9FDB",
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Gabarito-Regular",
              paddingBottom: 4,
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Events" component={Events} />
          <Tab.Screen name="Assignments" component={Assignments} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </>
    );
  return <LoadingScreen />;
}
