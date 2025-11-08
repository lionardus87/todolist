import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
	priority?: "low" | "medium" | "high";
	duedate?: Date;
};

type Props = {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
	if (todos.length === 0) return <p className="text-gray-500">No todos yet.</p>;

	return (
		<motion.ul className="space-y-2">
			<AnimatePresence>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						priority={todo.priority}
						dueDate={todo.duedate}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default TodoList;
