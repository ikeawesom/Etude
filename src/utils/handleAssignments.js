import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserData } from "./handleUserData";

export async function getAssignments() {
  try {
    const { data } = await checkUserData();

    return { error: null, data: data.ASSIGNMENTS, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}

export async function createAssignment({
  index,
  title,
  desc,
  due,
  subject,
  tags,
  color,
}) {
  try {
    const { data } = await checkUserData();
    var userData = data;
    var userAssignments = userData.ASSIGNMENTS;

    const newAssignment = {
      index: index,
      title: title,
      desc: desc,
      due: due,
      subject: subject,
      color: color,
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
    var userData = (await checkUserData()).data;
    var userAssignments = (await getAssignments()).data;

    const to_delete = userAssignments[index];

    delete userAssignments[index];
    userData = { ...userData, ASSIGNMENTS: userAssignments };

    await AsyncStorage.setItem("USER_DATA", JSON.stringify(userData));

    return { error: null, data: to_delete, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}
