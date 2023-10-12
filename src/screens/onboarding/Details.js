import { View, Text } from "react-native";
import React from "react";
import SafeCenter from "../../components/SafeCenter";
import { LightCheck } from "../../contexts/ThemeContext";

export default function DetailsScreen() {
  return (
    <SafeCenter styles={`${LightCheck() ? "bg-slate-100" : "bg-slate-800"}`}>
      <Text>Details</Text>
    </SafeCenter>
  );
}
