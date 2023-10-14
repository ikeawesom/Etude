import { Image } from "react-native";
import React from "react";
import SafeCenter from "../components/SafeCenter";

export default function LoadingScreen() {
  return (
    <SafeCenter styles="bg-slate-800">
      <Image
        source={require("../../assets/icon.png")}
        style={{ height: 150, width: 150 }}
        className="rounded-xl"
      />
    </SafeCenter>
  );
}
