import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  Home,
  Events,
  Assignments,
  Settings,
  LoadingScreen,
} from "./src/screens";
import { checkOnboard } from "./src/utils/Onboarding";
import { WelcomeScreen, DetailsScreen } from "./src/screens/onboarding";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function DefaultNavigation({ layout }) {
  const { status } = checkOnboard();

  if (status)
    return (
      <ThemeContextProvider>
        <NavigationContainer onLayout={layout}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Events" component={Events} />
            <Tab.Screen name="Assignments" component={Assignments} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeContextProvider>
    );
  return (
    <ThemeContextProvider>
      <NavigationContainer onLayout={layout}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
          <Stack.Screen
            component={DetailsScreen}
            options={{ animation: "fade" }}
            name="DetailsScreen"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
