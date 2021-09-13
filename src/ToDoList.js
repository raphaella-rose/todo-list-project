import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, filterTasks}) => {
  const handleClick = (e) => {
  e.preventDefault();
  filterTasks();
  }
  return (
    <div className="item-list">
      {toDoList.map((todo) => {
        return <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} />
      })}
      <button className="mt-4 button" onClick={handleClick}>Clear Completed Tasks</button>
    </div>
  )
}

export default ToDoList;