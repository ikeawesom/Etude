import { View, Text } from "react-native";
import React from "react";

export default function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-sky-200 to-sky-500">
      <Text className="text-3xl text-slate-50">Loading resources...</Text>
    </View>
  );
}
