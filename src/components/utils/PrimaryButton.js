import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function PrimaryButton({ children, clickEvent }) {
  return (
    <TouchableOpacity
      onPress={clickEvent}
      className="px-8 py-4 rounded-lg shadow-md bg-primary self-stretch"
    >
      <Text className="text-white text-2xl font-default-regular text-center">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
