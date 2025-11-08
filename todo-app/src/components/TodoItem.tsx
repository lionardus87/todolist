import React from "react";
import { motion } from "framer-motion";

type Props = {
	id: number;
	title: string;
	completed: boolean;
	priority?: "low" | "medium" | "high";
	dueDate?: Date;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({
	id,
	title,
	completed,
	priority = "medium",
	dueDate,
	toggleTodo,
	deleteTodo,
}) => {
	const priorityColors: Record<"low" | "medium" | "high", string> = {
		low: "green",
		medium: "yellow",
		high: "red",
	};

	return (
		<motion.li
			layout
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.5 }}
			className={`flex justify-between items-center p-3 rounded-lg border ${
				completed ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
			}`}
		>
			<div className="flex flex-col gap-1">
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						checked={completed}
						onChange={() => toggleTodo(id)}
						className="w-4 h-4 accent-blue-600"
					/>
					<span
						className={`${
							completed
								? "line-through text-gray-500"
								: "text-gray-900 dark:text-gray-100"
						}`}
					>
						{title}
					</span>
				</div>

				<div className="flex gap-3 text-sm text-gray-500">
					<span className={priorityColors[priority]}>
						Priority: {priority.toUpperCase()}
					</span>
					{dueDate && <span>📅 Due: {new Date(dueDate).toLocaleDateString()}</span>}
				</div>
			</div>

			<button
				onClick={() => deleteTodo(id)}
				className="px-3 py-1 rounded text-white bg-red-500 hover:bg-red-600"
			>
				Delete
			</button>
		</motion.li>
	);
};

export default TodoItem;
