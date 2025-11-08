"use client";

import React, { useState } from "react";
import TodoList from "../components/TodoList";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
	priority?: "low" | "medium" | "high";
	duedate?: Date;
};

export default function HomePage() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState("");
	const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
	const [dueDate, setDueDate] = useState<Date | null>(null);

	const addTodo = () => {
		if (!newTodo.trim()) return;
		const todo: Todo = {
			id: Date.now(),
			title: newTodo,
			completed: false,
			priority,
			duedate: dueDate || undefined,
		};
		setTodos([todo, ...todos]);
		setNewTodo("");
		setDueDate(null);
		setPriority("medium");
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
		<main className="max-w-lg mx-auto mt-10 p-4 bg-white dark:bg-gray-900 rounded shadow">
			<h1 className="text-2xl font-bold mb-4">To-Do List</h1>
			<div className="flex flex-col gap-2 mb-4">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className="p-2 border rounded dark:bg-gray-800 dark:text-white"
					placeholder="Add a new task"
				/>
				<div className="flex gap-2 mb-4">
					<select
						value={priority}
						onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
						className="p-2 border rounded dark:bg-gray-800 dark:text-white"
					>
						<option value="low">Low Priority</option>
						<option value="medium">Medium Priority</option>
						<option value="high">High Priority</option>
					</select>
					<input
						type="date"
						value={dueDate ? dueDate.toISOString().split("T")[0] : ""}
						onChange={(e) =>
							setDueDate(e.target.value ? new Date(e.target.value) : null)
						}
						className="p-2 border rounded dark:bg-gray-800 dark:text-white"
					/>
				</div>
				<button
					onClick={addTodo}
					className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transtion-colors"
				>
					Add
				</button>
			</div>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</main>
	);
}
