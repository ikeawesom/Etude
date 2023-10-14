import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import SafeCenter from "../../components/SafeCenter";
import { useThemeContext } from "../../contexts/ThemeContext";

import {
  initalizePrefs,
  setAssistantType,
} from "../../utils/handlePreferences";

export default function AssistantTypeScreen({ navigation }) {
  const { theme } = useThemeContext();

  const handleAssistantGender = async (type) => {
    const { status } = await setAssistantType(type);
    if (status) navigation.navigate("DetailsScreen");
  };

  useEffect(() => {
    const init = async () => {
      await initalizePrefs();
    };
    init();
  }, []);

  return (
    <SafeCenter
      styles={`${theme === "light" ? "bg-slate-100" : "bg-dark-black"}`}
    >
      <View className="items-center justify-center gap-y-10">
        <View>
          <Text
            className={`${
              theme === "light" ? "text-dark-black" : "text-slate-50"
            } text-3xl font-montserrat-regular text-center`}
          >
            Before we get started, who would you like your personal study
            assistant to be?
          </Text>
        </View>
        <View className="flex-row gap-x-5 items-center justify-center">
          <TouchableOpacity
            className="rounded-full overflow-hidden"
            onPress={() => handleAssistantGender("FEMALE")}
          >
            <Image
              source={require("../../../assets/images/onboarding/female-assistant.jpg")}
              style={{ height: 150, width: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-full overflow-hidden"
            onPress={() => handleAssistantGender("MALE")}
          >
            <Image
              source={require("../../../assets/images/onboarding/male-assistant.jpg")}
              style={{ height: 150, width: 150 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeCenter>
  );
}
