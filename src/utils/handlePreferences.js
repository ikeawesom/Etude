import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultPrefs = {
  name: "",
  assistantType: "",
  assistantName: "",
};

export async function resetUserPrefs() {
  try {
    await AsyncStorage.removeItem("USER_PREFS");
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
export async function getUserPrefs() {
  var userPrefs = await AsyncStorage.getItem("USER_PREFS");
  return JSON.parse(userPrefs);
}

export async function initalizePrefs() {
  try {
    await AsyncStorage.setItem("USER_PREFS", JSON.stringify(defaultPrefs));

    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function setAssistantType(type) {
  try {
    var userPrefs = getUserPrefs();
    userPrefs = { ...userPrefs, assistantType: type };

    await AsyncStorage.setItem("USER_PREFS", JSON.stringify(userPrefs));

    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function getAssistantName() {
  const maleNames = ["Alex", "Max", "Leo", "Sam", "Kai"];
  const femaleNames = ["Zoe", "Mia", "Eva", "Amy", "Ivy"];

  try {
    var userPrefs = await getUserPrefs();
    const type = userPrefs.assistantType;
    var name = userPrefs.assistantName;

    if (!name) {
      // new user
      if (type === "MALE") {
        name = maleNames[Math.floor(Math.random() * maleNames.length - 1)];
      } else if (type === "FEMALE") {
        name = femaleNames[Math.floor(Math.random() * femaleNames.length - 1)];
      }
      userPrefs = { ...userPrefs, assistantName: name };
      await AsyncStorage.setItem("USER_PREFS", JSON.stringify(userPrefs));
    }

    return { error: null, status: true, name: userPrefs.assistantName };
  } catch (error) {
    return { error: error, status: false };
  }
}

export async function setName(nameInput) {
  try {
    var userPrefs = await getUserPrefs();
    userPrefs = { ...userPrefs, name: nameInput };
    await AsyncStorage.setItem("USER_PREFS", JSON.stringify(userPrefs));
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
