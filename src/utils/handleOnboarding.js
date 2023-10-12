import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkOnboard() {
  try {
    const value = await AsyncStorage.getItem("ONBOARDED_STATUS");
    if (value !== null) return { error: null, status: true };
    return { error: error, status: false };
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

export async function setAssistantType(type) {
  try {
    await AsyncStorage.setItem("ASSISTANT_TYPE", type);
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function getAssistantName() {
  const maleNames = ["Alex", "Max", "Leo", "Sam", "Kai"];
  const femaleNames = ["Zoe", "Mia", "Eva", "Amy", "Ivy"];
  try {
    const assistantType = await AsyncStorage.getItem("ASSISTANT_TYPE");
    if (assistantType !== null) {
      const assistantName = await AsyncStorage.getItem("ASSISTANT_NAME");
      if (assistantName === null) {
        var name;
        if (assistantType === "MALE") {
          name = maleNames[Math.floor(Math.random() * maleNames.length)];
        } else {
          name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
        }
        await AsyncStorage.setItem("ASSISTANT_NAME", name);
        return { error: null, status: true, name: name };
      }
      return { error: null, status: true, name: assistantName };
    }
    return { error: error, status: false };
  } catch (error) {
    return { error: error, status: false };
  }
}
