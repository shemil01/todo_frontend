import React, { useEffect, useState } from "react";
import { Axios } from "../Mainrouter"; // Make sure Axios is correctly imported

const ViewTask = () => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    Axios.get("view-task")
      .then((response) => {
        setListTask(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("task fetching error", error);
      });
  }, []);

  return (
    <div>
      {listTask.map((todo, index) => (
        <h3 key={index}>{todo}</h3>
      ))}
    </div>
  );
};

export default ViewTask;
