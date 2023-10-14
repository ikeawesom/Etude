import AsyncStorage from "@react-native-async-storage/async-storage";

const ASSIGNMENT = {
  index: "",
  title: "",
  desc: "",
  due: "",
  tags: [],
};

const SUBJECT = {
  index: "",
  name: "",
  teacher: "",
  color: "",
};

const EVENT = {
  index: "",
  title: "",
  desc: "",
  date: "",
  time: "",
  tags: [],
};

const USER_DATA = {
  ASSIGNMENTS: {},
  SUBJECTS: {},
  EVENTS: {},
};

export async function resetUserData() {
  try {
    await AsyncStorage.removeItem("USER_DATA");
    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
export async function checkUserData() {
  try {
    const res = await AsyncStorage.getItem("USER_DATA");
    if (res !== null) {
      const userData = JSON.parse(res);
      return { error: null, status: true, data: userData };
    }
    return { error: null, status: false, data: null };
  } catch (error) {
    return { error: error, status: false, data: null };
  }
}

export async function initUserData() {
  try {
    const { status } = await checkUserData();
    if (!status)
      await AsyncStorage.setItem("USER_DATA", JSON.stringify(USER_DATA));

    return { error: null, status: true };
  } catch (error) {
    return { error: error, status: false };
  }
}
