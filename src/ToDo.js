import React from "react";

const ToDo = ({todo, handleToggle}) => {

const handleClick = (e) => {
e.preventDefault();
handleToggle(e.currentTarget.id)
}
return (
  <div id={todo.id} key={todo.id + todo.task} className={todo.complete ? "strike mt-1 item" : "mt-1 item"} onClick={handleClick} >
    {todo.task}
    </div>
)
}

export default ToDo