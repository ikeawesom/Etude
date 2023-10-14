import React, { useEffect, useState } from "react";
import {
  createAssignment,
  deleteAssignment,
  getAssignments,
} from "../utils/handleAssignments";
import { TouchableOpacity, Text, View } from "react-native";
import ContextHeader from "./utils/ContextHeader";

export default function AssignmentsContainer({ navigation }) {
  const [assignments, setAssignments] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleAssignments = async () => {
      const { status, data } = await getAssignments();
      if (status) {
        setAssignments(data);
        console.log("Assignments loaded:", data);
        if (!loaded) setLoaded(true);
      }
    };

    handleAssignments();
  }, [loaded]);

  return (
    <View>
      <ContextHeader title="Assignments Due Soon" />
      <View
        className={`pb-3 ${
          Object.keys(assignments).length === 0
            ? "items-center justify-center min-h-[10vh]"
            : ""
        }`}
      >
        {Object.keys(assignments).length === 0 ? (
          <Text className="font-montserrat-regular text-gray-400">
            You're all caught up with work!
          </Text>
        ) : (
          <View className="gap-y-2">
            {Object.keys(assignments)
              .slice(0, 3)
              .map((item) => (
                <View className={`p-4 rounded-xl bg-[#212530]`} key={item}>
                  <View className="mb-1">
                    <Text
                      className={`text-base text-slate-50 font-default-bold ${assignments[item].color} self-start px-2 py-1 rounded-lg mb-2`}
                    >
                      {assignments[item].subject}
                    </Text>
                    <Text className="text-xl text-slate-50 font-default-semibold">
                      {assignments[item].title}
                    </Text>
                  </View>
                  <Text className="text-slate-300 font-montserrat-regular text-base">
                    {assignments[item].desc.length > 30
                      ? `${assignments[item].desc.substring(0, 30)}...`
                      : assignments[item].desc}
                  </Text>
                  <Text className="text-slate-300 font-montserrat-regular text-sm mt-1">
                    Due: {assignments[item].due}
                  </Text>
                </View>
              ))}
          </View>
        )}
      </View>
      <TouchableOpacity
        className="self-end"
        onPress={() => navigation.navigate("Assignments")}
      >
        <Text className={`text-primary font-default-medium text-lg`}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}
