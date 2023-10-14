import React, { useEffect, useState } from "react";
import { getAssignments } from "../utils/handleAssignments";
import ContextContainer from "./utils/ContextContainer";

export default function EventsContainer({ navigation }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const handleAssignments = async () => {
      const { data } = await getAssignments();
      if (data) setAssignments(data);
    };

    handleAssignments();
  }, []);
  return (
    <ContextContainer
      data={assignments}
      empty="Looks empty here!"
      link="Events"
      navigation={navigation}
      title="Upcoming Events"
      color="bg-green-100"
    />
  );
}
