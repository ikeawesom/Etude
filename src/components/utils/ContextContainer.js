import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function ContextContainer({
  title,
  empty,
  data,
  navigation,
  link,
  color,
}) {
  const { theme } = useThemeContext();

  return (
    <View className="gap-y-2">
      <Text
        className={`${
          theme === "dark" ? "text-slate-50" : "text-slate-800"
        } text-xl font-default-regular`}
      >
        {title}
      </Text>
      <View
        className={`${color} rounded-md min-h-[40vh] ${
          Object.keys(data).length === 0
            ? "items-center justify-center"
            : "p-3 gap-y-4"
        }`}
      >
        {Object.keys(data).length === 0 ? (
          <Text className="font-montserrat-regular">{empty}</Text>
        ) : (
          <View>
            <Text>Hello</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        className="self-end"
        onPress={() => navigation.navigate(link)}
      >
        <Text className={`text-sky-500 font-default-medium text-lg`}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}
