import React from "react";

type Props = {
	id: number;
	title: string;
	completed: boolean;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({
	id,
	title,
	completed,
	toggleTodo,
	deleteTodo,
}) => {
	return (
		<li className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					checked={completed}
					onChange={() => toggleTodo(id)}
					className="w-4 h-4"
				/>
				<span className={completed ? "line-through text-gray-500" : ""}>
					{title}
				</span>
			</div>
			<button
				onClick={() => deleteTodo(id)}
				className="text-red-500 hover:text-red-700"
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
