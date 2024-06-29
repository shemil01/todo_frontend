import React, { useEffect, useState } from "react";
import { Axios } from "../Mainrouter";

const ViewTask = () => {
  const [listTask, setListTask] = useState([]);
  const [showEdit,setShowEdit] = useState(false)
  const [edit,setEdit] = useState('')
  useEffect(() => {
    Axios.get("/view-task")
      .then((response) => {
        setListTask(response.data);
        console.log(response.data)
        
        
      })
      .catch((error) => {
        console.error("task fetching error", error);
      });
  }, []);

  //edit task
const editTask = async()=>{

}


  return (
    <div>
<div>
  <input type="search" placeholder="search task.." />
</div>

      {listTask?.map((todo) => (
        <ul>
          <li>
          {todo.task} <button onClick={()=>{
            setShowEdit(true)
          }}>edit</button>  <button>delete</button>
            
          </li>
        </ul>
     ) )}
    </div>
  );
};

export default ViewTask;
