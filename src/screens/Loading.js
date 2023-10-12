import { ext } from "react-native";
import React from "react";
import SafeCenter from "../components/SafeCenter";
import { LightCheck } from "../contexts/ThemeContext";

export default function LoadingScreen() {
  return (
    <SafeCenter styles={`${LightCheck() ? "bg-slate-100" : "bg-slate-800"}`}>
      <Text
        className={`${
          LightCheck() ? "text-slate-800" : "text-slate-50"
        } text-3xl font-default-regular text-center`}
      >
        Loading resources...
      </Text>
    </SafeCenter>
  );
}
