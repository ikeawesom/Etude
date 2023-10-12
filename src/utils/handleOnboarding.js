import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserPrefs } from "./handlePreferences";

export async function resetOnboarding() {
  try {
    await AsyncStorage.removeItem("ONBOARDED_STATUS");
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function checkOnboard() {
  try {
    const value = await AsyncStorage.getItem("ONBOARDED_STATUS");
    if (value === null) return { error: null, status: false }; // first time user logs in
    return { error: null, status: true }; // user completed onboarding
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function setOnboard() {
  try {
    await AsyncStorage.setItem("ONBOARDED_STATUS", "true");
    const userPrefs = await getUserPrefs();
    console.log("User onboarded successfully", userPrefs);
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
