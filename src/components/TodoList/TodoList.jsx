import React, { useState } from "react";

import "./todolist.scss";

import { ListGroup } from "reactstrap";
import { Alert } from "reactstrap";

import TodoItem from "../TodoItem/TodoItem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const TodoList = () => {
  const [state, setState] = useState({
    tasks: [
      { id: 1, name: "Task 1", done: false },
      { id: 2, name: "Task 2", done: false },
      { id: 3, name: "Task 3", done: true },
      { id: 4, name: "Task 4", done: false },
      { id: 5, name: "Task 5", done: true },
    ],
    newTaskName: "",
  });

  const createTask = (e) => {
    e.preventDefault();

    setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          id: Date.now(),
          name: state.newTaskName,
          done: false,
        },
      ],
      newTaskName: "",
    }));
  };

  const deteleTask = (id) => {
    const indexToDelete = state.tasks.findIndex((task) => task.id === id);
    let newTasks = [...state.tasks];
    newTasks.splice(indexToDelete, 1);

    setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
    }));

    console.log(newTasks);
  };

  const completeTask = (id) => {
    // task.done = true
    const newTasks = state.tasks.map((task) => {
      if (task.id === id) {
        task.done = task.done ? false : true;
      }

      return task;
    });

    setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
    }));

    console.log(state.tasks);
    // css effect
  };

  const handleChange = (e) => {
    const newTaskName = e.currentTarget.value;
    setState((prevState) => ({
      ...prevState,
      newTaskName,
    }));
  };

  const editTask = (id, event) => {
    const newTasks = state.tasks.map((task) => {
      if (task.id === id) {
        task.name = event.target.value;
      }

      return task;
    });

    setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
    }));
  };
  return (
    <div>
      <ListGroup>
        {state.tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={deteleTask}
            onStatusChange={completeTask}
            editTask={editTask}
          />
        ))}
      </ListGroup>

      {!state.tasks.length && (
        <Alert color="light">
          There are no tasks available. You can create one.
        </Alert>
      )}
      <NewTaskForm
        currentValue={state.newTaskName}
        handleChange={handleChange}
        createTask={createTask}
      />
    </div>
  );
};

export default TodoList;
