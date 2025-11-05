import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

type Props = {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
	if (todos.length === 0) return <p className="text-gray-500">No todos yet.</p>;

	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

export default TodoList;
