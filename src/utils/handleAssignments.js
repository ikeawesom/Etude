import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserData } from "./handleUserData";

export async function getAssignments() {
  try {
    const USER_DATA_STR = await AsyncStorage.getItem("USER_DATA");
    const USER_DATA = JSON.parse(USER_DATA_STR);

    return { error: null, data: USER_DATA.ASSIGNMENTS, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}

export async function createAssignment({ index, title, desc, due, tags }) {
  try {
    const { data } = await checkUserData();

    var userData = JSON.parse(data);
    var userAssignments = userData.ASSIGNMENTS;

    const newAssignment = {
      index: index,
      title: title,
      desc: desc,
      due: due,
      tags: tags,
    };

    userAssignments = { ...userAssignments, [index]: newAssignment };

    userData = { ...userData, ASSIGNMENTS: userAssignments };
    await AsyncStorage.setItem("USER_DATA", JSON.stringify(userData));
    return { error: null, data: newAssignment, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}

export async function deleteAssignment(index) {
  try {
    const userData_str = await checkUserData();
    var userData = JSON.parse(userData_str);
    var userAssignments = userData.ASSIGNMENTS;
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}
