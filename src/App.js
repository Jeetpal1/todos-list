/**
 * @author Jeetpal Singh, singhjeetpal@gmail.com
 * This is a todo list application. In which you can add or remove the tasks you wanna accomplish. It uses local storage to keep the tasks in storage/saved.
 */
// Please note: In my project, I have used different ways to do a same thing. I know every website should be consistent, this is only for the purpose of my future reference, which tells me that this can be done in this way as well

import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
import React, { useState, useEffect } from "react"; //Since React does not update the webpage when there is a change to any variable. For example, in this cas e, when I am deleting an array element (a task).
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//I will use Router to go to other pages like About without having to reload the website.

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // Deletes a task
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    // The following will go over every todo tasks and set the todo task which is not equals to todo, means todo (which we wanna delete gets ignored)
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  // Here setTodos is function that will update the tasks (elements)
  const [todos, setTodos] = useState(initTodo);

  // Whenever my todos will change this useEffect will be called
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* Here Router works as a Switch statement which matches the path, only render those components. */}
      <Router>
        <Header title="Jeetpal's TodosList" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={[
              <AddTodo addTodo={addTodo} />,
              <Todos todos={todos} onDelete={onDelete} />,
            ]}
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
