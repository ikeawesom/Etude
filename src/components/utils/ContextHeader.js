import { View, Text } from "react-native";
import React from "react";

export default function ContextHeader({ title }) {
  return (
    <Text
      className={`text-slate-50
          text-2xl font-default-regular mb-2`}
    >
      {title}
    </Text>
  );
}
