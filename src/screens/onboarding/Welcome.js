import React from "react";
import { View, Text, Image } from "react-native";
import SafeCenter from "../../components/SafeCenter";
import { LightCheck } from "../../contexts/ThemeContext";
import PrimaryButton from "../../components/utils/PrimaryButton";

export default function WelcomeScreen({ navigation }) {
  const nextPage = () => {
    navigation.navigate("AssistantTypeScreen");
  };

  return (
    <SafeCenter styles={`${LightCheck() ? "bg-slate-100" : "bg-slate-800"}`}>
      <View className="items-center justify-center p-10 gap-y-10">
        <View className="items-center justify-center">
          <Text
            className={`${
              LightCheck() ? "text-slate-800" : "text-slate-50"
            } text-6xl font-default-regular text-center`}
          >
            Etude
          </Text>
          <Text
            className={`${
              LightCheck() ? "text-slate-800" : "text-slate-100"
            } text-2xl font-montserrat-regular text-center`}
          >
            The best study partner that tracks and manages your work, fully
            adapting to your needs.
          </Text>
        </View>
        <View className="rounded-full border-2 border-white overflow-hidden">
          <Image
            source={require("../../../assets/images/onboarding/welcome.jpg")}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <View className="self-stretch">
          <PrimaryButton clickEvent={nextPage}>Get started</PrimaryButton>
        </View>
      </View>
    </SafeCenter>
  );
}
