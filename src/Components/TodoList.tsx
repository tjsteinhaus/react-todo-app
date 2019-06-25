import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

type todo = {
	title: string;
	completed: boolean;
}

type state = {
	todos: todo[];
}

const TodoList: React.FC = () => {
	const todos = useSelector( ( state: state ) => state.todos );
	const displayTodos = todos.map( ( todo: todo, index: number ) => <TodoItem title={todo.title} completed={todo.completed} index={index} key={index} />);

	return (
		<ul className="list-group">
			{displayTodos}
			<TodoForm />
		</ul>
	)
}

export default TodoList;