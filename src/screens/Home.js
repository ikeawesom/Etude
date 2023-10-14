import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AssignmentsContainer from "../components/AssignmentsContainer";
import { getUserPrefs } from "../utils/handlePreferences";
import LoadingScreen from "../screens/Loading";
import { useThemeContext } from "../contexts/ThemeContext";
import { ScrollView } from "react-native";
import EventsContainer from "../components/EventsContainer";

export default function Home({ navigation }) {
  const { theme } = useThemeContext();
  const [userPrefs, setUserPrefs] = useState({
    name: "",
    assistantType: "",
    assistantName: "",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleUserPrefs = async () => {
      const res = await getUserPrefs();
      if (res) {
        setUserPrefs(res);
        setLoaded(true);
      }
    };

    handleUserPrefs();
  }, []);

  if (loaded)
    return (
      <SafeAreaView
        className={`pt-10 ${
          theme === "light" ? "bg-slate-100" : "bg-dark-black"
        }`}
      >
        <ScrollView className={`p-10 gap-y-8 pt-0 `}>
          <View>
            <Text
              className={`text-3xl font-default-regular text-center ${
                theme === "dark" ? "text-slate-50" : "text-dark-black"
              }`}
            >
              Hi there, <Text className="text-primary">{userPrefs.name}</Text>!
              What can I do for you today?
            </Text>
          </View>
          <View>
            <EventsContainer navigation={navigation} />
          </View>
          <View>
            <AssignmentsContainer navigation={navigation} />
          </View>
          <Text
            className={`py-4 text-center font-default-semibold ${
              theme === "dark" ? "text-slate-50" : "text-dark-black"
            }`}
          >
            Created by <Text className="text-primary">Mentaicode</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  return <LoadingScreen />;
}
