import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
const [userInput, setUserInput] = useState("");
const handleChange = (e) => {
e.preventDefault();
setUserInput(e.currentTarget.value);
}
const handleSubmit = (e) => {
e.preventDefault();
addTask(userInput);
setUserInput("");
}
return(
  <div>
  <form onSubmit={handleSubmit}>
  <input value={userInput} type="text" placeholder="Enter a task..." onChange={handleChange} />
  <button>Add</button>
  </form>
  </div>
)
}

export default ToDoForm;