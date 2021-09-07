import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, filterTasks}) => {
  const handleClick = (e) => {
  e.preventDefault();
  filterTasks();
  }
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} />
      })}
      <button onClick={handleClick}>Clear Completed Tasks</button>
    </div>
  )
}

export default ToDoList;