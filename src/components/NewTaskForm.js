import React, {useState} from "react";
//import { useState } from "react/cjs/react.production.min";

function NewTaskForm({ onTaskFormSubmit, categories }) {


  const [text, setText] = useState("");
  const [category, setCat] = useState("Code")

  function handleSumbit(e){
    e.preventDefault()
    onTaskFormSubmit({ text, category })
    setText("")
    setCat("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSumbit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCat(e.target.value)}>
          {categories.map((cat) => (<option key={cat}>{cat}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;