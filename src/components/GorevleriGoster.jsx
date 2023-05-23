import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons

const GorevleriGoster = ({ array, setArray }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleDoubleClick = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskList) => taskList !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const handleOnclick = (id) => {
    setArray(array.filter((taskList) => taskList.id !== id));
  };

  

  return (
    <div>
      {array.map((task) => (
        <div
          key={task.id}
          className={completedTasks.includes(task.id) ? "done" : "gorev"}
          onDoubleClick={() => handleDoubleClick(task.id)}
        >
          <h3>
            {task.text}
            <FaTimesCircle
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleOnclick(task.id)}
            />
          </h3>
          <h6>{task.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;
