import React, { useEffect, useState } from "react";
import { createEvent, deleteEvent, getEvents } from "../utils/handleEvents";
import { View, Text, TouchableOpacity } from "react-native";
import ContextHeader from "./utils/ContextHeader";

export default function EventsContainer({ navigation }) {
  const [events, setEvents] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleEvents = async () => {
      const { data } = await getEvents();
      if (data) {
        setEvents(data);
        if (!loaded) setLoaded(true);
      }
    };

    handleEvents();
  }, [loaded]);
  return (
    <View>
      <ContextHeader title="Upcoming Events" />
      <View
        className={`pb-3 ${
          Object.keys(events).length === 0
            ? "items-center justify-center min-h-[10vh]"
            : ""
        }`}
      >
        {Object.keys(events).length === 0 ? (
          <Text className="font-montserrat-regular text-gray-400">
            You're all caught up with work!
          </Text>
        ) : (
          <View className="gap-y-2">
            {Object.keys(events)
              .slice(0, 3)
              .map((item) => (
                <View className={`p-4 rounded-xl bg-[#212530]`} key={item}>
                  <View className="mb-1">
                    <Text className="text-xl text-slate-50 font-default-semibold">
                      {events[item].title}
                    </Text>
                  </View>
                  <Text className="text-slate-300 font-montserrat-regular text-base">
                    {events[item].desc.length > 30
                      ? `${events[item].desc.substring(0, 30)}...`
                      : events[item].desc}
                  </Text>
                  <Text className="text-slate-300 font-montserrat-regular text-sm mt-1">
                    Date: {events[item].due}
                  </Text>
                </View>
              ))}
          </View>
        )}
      </View>
      <TouchableOpacity
        className="self-end"
        onPress={() => navigation.navigate("Events")}
      >
        <Text className={`text-primary font-default-medium text-lg`}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}
