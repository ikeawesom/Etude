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

  const newAssign = async () => {
    const { status, error } = await createAssignment({
      index: 3,
      subject: "Math",
      color: "bg-green-600",
      title: "Assignment 1",
      desc: "Nostrud dolore aute Lorem ut non et ut anim. Nulla et mollit ad duis amet culpa consectetur irure nisi aliqua. Tempor magna Lorem ipsum non nulla irure dolor non. Labore deserunt ut labore qui labore commodo nisi quis reprehenderit sunt eiusmod. Do qui est aliquip commodo reprehenderit esse ea. Velit nulla minim irure aute laboris ex fugiat ullamco est sint sint.",
      due: "Due date",
      tags: "testing tags",
    });
    if (status) setLoaded(false);
  };

  const removeAssign = async () => {
    const { status } = await deleteAssignment(3);
    if (status) setLoaded(false);
  };

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
    <>
      <TouchableOpacity
        className="p-3 bg-primary self-start rounded-md"
        onPress={newAssign}
      >
        <Text>Add Random Assignment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-3 bg-primary self-start rounded-md"
        onPress={removeAssign}
      >
        <Text>Remove Assignment</Text>
      </TouchableOpacity>
      <View>
        <ContextHeader title="Assignments Due" />
        <View
          className={`${
            Object.keys(assignments).length === 0
              ? "items-center justify-center min-h-[20vh]"
              : "min-h-[40vh]"
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
    </>
  );
}
