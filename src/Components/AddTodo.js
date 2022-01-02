import React, { useState } from "react";

export const AddTodo = (props) => {
  // These are state variables
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //adds task to the array when user clicked the submit button
  const submit = (e) => {
    e.preventDefault(); //It will avoid reloading the page
    if (!title || !desc) {
      alert("Please enter something in text fields to add!");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3 className="text-center">Add a Todo Task</h3>
      <form onSubmit={submit}>
        {/* Task's title text field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          {/* Here value of the text boxes will be title variable and if it changes the title variable becomes the new entered text */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        {/* Task's description text field */}
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Desciption
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        {/* Button to add the task to our array */}
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
