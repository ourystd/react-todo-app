import React from "react";
import TodoList from "../components/TodoList/TodoList";

export default function TodoApp() {
	return (
		<div className="mb-5">
			<h1 className="text-center  py-2">Todo App</h1>
			<TodoList />
		</div>
	);
}
