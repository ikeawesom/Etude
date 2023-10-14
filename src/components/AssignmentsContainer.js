import React, { useEffect, useState } from "react";
import {
  createAssignment,
  deleteAssignment,
  getAssignments,
} from "../utils/handleAssignments";
import ContextContainer from "./utils/ContextContainer";
// import { TouchableOpacity, Text } from "react-native";

export default function AssignmentsContainer({ navigation }) {
  const [assignments, setAssignments] = useState({});

  // const newAssign = async () => {
  //   const { status } = await createAssignment({
  //     index: 2,
  //     title: "Title",
  //     desc: "Desc",
  //     due: "Due date",
  //     tags: "testing tags",
  //   });
  //   if (status) {
  //     setAssignments({});
  //   }
  // };

  // const removeAssign = async () => {
  //   const { status } = await deleteAssignment(1);
  //   if (status) setAssignments({});
  // };

  useEffect(() => {
    const handleAssignments = async () => {
      const { status, data } = await getAssignments();
      if (status) setAssignments(data);
    };

    handleAssignments();
  }, [assignments]);

  return (
    <>
      {/* <TouchableOpacity
        className="p-3 bg-sky-500 self-start rounded-md"
        onPress={newAssign}
      >
        <Text>Add Random Assignment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-3 bg-sky-500 self-start rounded-md"
        onPress={removeAssign}
      >
        <Text>Remove Assignment</Text>
      </TouchableOpacity> */}
      <ContextContainer
        data={assignments}
        empty="You're all caught up with work!"
        link="Assignments"
        navigation={navigation}
        title="My Assignments"
        color="bg-sky-100"
      />
    </>
  );
}
