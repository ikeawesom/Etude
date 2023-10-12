import React from "react";
import { View, Text } from "react-native";
import SafeCenter from "../components/SafeCenter";

export function WelcomeScreen() {
  return (
    <SafeCenter styles="bg-gradient-to-br from-sky-50 to-sky-300">
      <View>
        <Text className="text-slate-800 text-3xl font-default-regular">
          Welcome!
        </Text>
      </View>
    </SafeCenter>
  );
}
