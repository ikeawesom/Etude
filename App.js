import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { LoadingScreen } from "./src/screens";
import { checkOnboard, resetOnboarding } from "./src/utils/handleOnboarding";
import {
  WelcomeScreen,
  DetailsScreen,
  AssistantTypeScreen,
} from "./src/screens/onboarding";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import Navigations from "./src/screens/Navigations";
import { resetUserPrefs } from "./src/utils/handlePreferences";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Gabarito-Regular": require("./assets/fonts/Gabarito-Regular.ttf"),
    "Gabarito-Medium": require("./assets/fonts/Gabarito-Medium.ttf"),
    "Gabarito-SemiBold": require("./assets/fonts/Gabarito-SemiBold.ttf"),
    "Gabarito-Bold": require("./assets/fonts/Gabarito-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return <LoadingScreen />;

  return <DefaultNavigation layout={onLayoutRootView} />;
}

var debug = false;

function DefaultNavigation({ layout }) {
  // debug = true;
  useEffect(() => {
    const reset = async () => {
      await resetOnboarding();
      await resetUserPrefs();
    };

    if (debug) reset();
  }, []);

  return (
    <ThemeContextProvider>
      <NavigationContainer onLayout={layout}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            component={WelcomeScreen}
            name="WelcomeScreen"
            options={{ animation: "fade" }}
          />
          <Stack.Screen
            component={AssistantTypeScreen}
            options={{ animation: "fade" }}
            name="AssistantTypeScreen"
          />
          <Stack.Screen
            component={DetailsScreen}
            options={{ animation: "fade" }}
            name="DetailsScreen"
          />
          <Stack.Screen
            component={Navigations}
            name="Navigations"
            options={{ animation: "fade" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
