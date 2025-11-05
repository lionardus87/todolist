"use client";

import React, { useState } from "react";
import TodoList from "../components/TodoList";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

export default function HomePage() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (!newTodo.trim()) return;
		setTodos((prev) => [
			...prev,
			{ id: Date.now(), title: newTodo, completed: false },
		]);
		setNewTodo("");
	};

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<main className="max-w-md mx-auto mt-10 p-4 bg-white dark:bg-gray-900 rounded shadow">
			<h1 className="text-2xl font-bold mb-4">My To-Do List</h1>
			<div className="flex gap-2 mb-4">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className="flex-1 p-2 border rounded dark:bg-gray-800 dark:text-white"
					placeholder="Add a new task"
				/>
				<button
					onClick={addTodo}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Add
				</button>
			</div>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</main>
	);
}
