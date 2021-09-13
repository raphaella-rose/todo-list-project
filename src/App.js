import React, { useState } from "react";
import data from "./data.json";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

import './App.css';

function App() {
const [toDoList, setToDoList] = useState(data);
const handleToggle = (id) => {
let mapped = toDoList.map(task => {
return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
});
setToDoList(mapped);
}
const filterTasks = () => {
let filtered = toDoList.filter(task => {
return !task.complete;
});
setToDoList(filtered);
}
const addTask = (userInput) => {
let copy = [...toDoList];
copy.push({id: toDoList.length + 1, task: userInput, complete: false})
setToDoList(copy);
}
  return (
    <div className="App">
    <Header />
    <div className="container">
    <ToDoForm addTask={addTask} />
    <ToDoList filterTasks={filterTasks} handleToggle={handleToggle} toDoList={toDoList} />
    </div>
    <Footer />
    </div>
  );
}

export default App;
