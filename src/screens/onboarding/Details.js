import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SafeCenter from "../../components/SafeCenter";
import { LightCheck } from "../../contexts/ThemeContext";
import { getAssistantName, setName } from "../../utils/handlePreferences";
import { setOnboard } from "../../utils/handleOnboarding";

export default function DetailsScreen({ navigation }) {
  const [assistName, setAssistName] = useState("");
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    const handleAssistantName = async () => {
      const { name } = await getAssistantName();
      if (name) setAssistName(name);
    };

    handleAssistantName();
  }, []);

  const handleName = async () => {
    const { status } = await setName(nameInput);
    if (status) {
      const { status } = await setOnboard();
      if (status) navigation.navigate("Navigations");
    }
  };

  return (
    <SafeCenter
      styles={`${LightCheck() ? "bg-slate-100" : "bg-slate-800"} justify-start`}
    >
      <View className="py-20 gap-y-10">
        <Text className="text-3xl text-slate-50 font-montserrat-regular text-center">
          Hi, I am{" "}
          <Text className="font-montserrat-semibold text-sky-500">
            {assistName}
          </Text>{" "}
          and I will be your personal study assistant!
        </Text>
        <View className="gap-y-2">
          <Text className="text-lg text-slate-50 font-montserrat-regular text-center">
            Let's get your name.
          </Text>
          <TextInput
            placeholder="How can I address you?"
            className="bg-white px-6 py-4 rounded-lg shadow-md text-lg font-montserrat-medium"
            value={nameInput}
            onChangeText={(text) => setNameInput(text)}
          />
        </View>
        <TouchableOpacity style={{ alignSelf: "center" }} onPress={handleName}>
          <Text className="text-lg font-montserrat-medium text-sky-400 text-center">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeCenter>
  );
}
