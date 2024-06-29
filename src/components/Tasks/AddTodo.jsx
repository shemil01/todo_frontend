import React, { useState } from "react";
import { Axios } from "../Mainrouter";

const AddTodo = () => {
  const [addTodo, setAddTodo] = useState("");
  const addInput = async (e) => {
    e.preventDefault()
    await Axios.post("/add-task", {task:addTodo})
      .then((response) => {
        console.log(response);
        setAddTodo("")
      })
      .catch((error) => {
        console.log("task adding error", error);
      });
  };
  return (
    <div>
      <form onSubmit={addInput}>
        <input
          type="text"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
          placeholder="type here..."
        />
        <button type="submitt">add task</button>
      </form>
    </div>
  );
};

export default AddTodo;
