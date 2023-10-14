import { Image } from "react-native";
import React from "react";
import SafeCenter from "../components/SafeCenter";

export default function LoadingScreen() {
  return (
    <SafeCenter styles="bg-slate-800">
      <Image
        source={require("../../assets/icon.png")}
        style={{ height: 180, width: 180 }}
        className="rounded-3xl"
      />
    </SafeCenter>
  );
}
