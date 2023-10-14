import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserData } from "./handleUserData";

export async function getEvents() {
  try {
    const { data } = await checkUserData();

    return { error: null, data: data.EVENTS, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}

export async function createEvent({ index, title, desc, date, time, tags }) {
  try {
    var userData = (await checkUserData()).data;
    var userEvents = userData.EVENTS;

    const newEvent = {
      index: index,
      title: title,
      desc: desc,
      date: date,
      time: time,
      tags: tags,
    };

    userEvents = { ...userEvents, [index]: newEvent };

    userData = { ...userData, EVENTS: userEvents };
    await AsyncStorage.setItem("USER_DATA", JSON.stringify(userData));

    return { error: null, data: newEvent, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}

export async function deleteEvent(index) {
  try {
    var userData = (await checkUserData()).data;
    var userEvents = (await getEvents()).data;

    const to_delete = userEvents[index];

    delete userEvents[index];
    userData = { ...userData, EVENTS: userEvents };

    await AsyncStorage.setItem("USER_DATA", JSON.stringify(userData));

    return { error: null, data: to_delete, status: true };
  } catch (error) {
    return { error: error, data: null, status: false };
  }
}
