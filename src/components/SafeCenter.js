import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

export default function SafeCenter({ children, styles }) {
  return (
    <SafeAreaView
      className={twMerge("flex-1 justify-center items-center", styles)}
    >
      {children}
    </SafeAreaView>
  );
}
