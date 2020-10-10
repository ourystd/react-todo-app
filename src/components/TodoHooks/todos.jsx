import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./todos.scss";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Run once");
  }, []);

  useEffect(() => {
    if (loading) setTimeout(() => setLoading(false), 2000);
    console.log("Again : ", todos, loading);
  }, [todos, loading]);

  //   useEffect(() => {
  //     if (loading) {
  //       axios
  //         .get("https://jsonplaceholder.typicode.com/todos")
  //         // .then((response) => response.json())
  //         .then((resp) => {
  //           console.log(resp.data);
  //           console.log("First loading");
  //           setLoading(false);
  //           setTodos(resp.data.slice(0, 5));
  //         });
  //     }
  //     console.log(todos);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }, [todos, loading]);

  const addNewTAsk = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => [...prevTodos, { name: newTask, complete: false }]);
    setNewTask("");
  };

  //   uss;

  return (
    <div className="col-8 py-4 px-5 container">
      <form onSubmit={addNewTAsk}>
        <input
          className="form-control"
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.currentTarget.value)}
        />
      </form>

      <ul className="list-group mt-4">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          todos.map((task, index) => (
            <li className="list-group-item" key={index}>
              {task.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todos;
