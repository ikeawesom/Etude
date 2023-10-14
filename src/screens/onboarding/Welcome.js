import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import SafeCenter from "../../components/SafeCenter";
import PrimaryButton from "../../components/utils/PrimaryButton";
import { checkOnboard } from "../../utils/handleOnboarding";
import LoadingScreen from "../Loading";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function WelcomeScreen({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleOnboarding = async () => {
      const { status } = await checkOnboard();
      if (status) navigation.navigate("Navigations");
      else setLoaded(true);
    };

    handleOnboarding();
  }, []);

  const nextPage = () => {
    navigation.navigate("AssistantTypeScreen");
  };

  if (loaded)
    return (
      <SafeCenter
        styles={`${theme === "light" ? "bg-slate-100" : "bg-dark-black"}`}
      >
        <View className="items-center justify-center p-10 gap-y-10">
          <View className="items-center justify-center">
            <Text
              className={`${
                theme === "light" ? "text-dark-black" : "text-slate-50"
              } text-6xl font-default-regular text-center`}
            >
              Etude
            </Text>
            <Text
              className={`${
                theme === "light" ? "text-dark-black" : "text-slate-100"
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
  return <LoadingScreen />;
}
