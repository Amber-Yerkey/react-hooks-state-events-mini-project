import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//import { useState } from "react/cjs/react.production.min";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  console.log(TASKS)
  const [category, setCat] = useState("All")
  const showTask = tasks.filter((task) => category === "All" || task.category === category)

  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(deleteTask){
    setTasks(tasks.filter((task) => task.text !== deleteTask))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat={category} onSelectedCat={setCat} />
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} onTaskFormSubmit={handleAddTask} />
      <TaskList onDelete={handleDeleteTask} tasks={showTask} />
    </div>
  );
}

export default App;