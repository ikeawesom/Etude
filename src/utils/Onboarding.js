import { AsyncStorage } from "react-native";

export async function checkOnboard() {
  try {
    const value = await AsyncStorage.getItem("ONBOARDED_STATUS");
    if (value !== null) {
      return { error: null, status: true };
    }
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function setOnboard() {
  try {
    await AsyncStorage.setItem("ONBOARDED_STATUS", true);
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
