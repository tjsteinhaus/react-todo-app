import React from 'react';
import { useDispatch } from 'react-redux';

interface Todo {
	title: string;
	completed: boolean;
	index: number;
}

const TodoItem: React.FC<Todo> = ( { title, completed, index } ) => {
	const dispatch = useDispatch();
	let todo;

	const toggleTodo = () => {
		dispatch( { type: 'TOGGLE_TODO', index: index } );
	}

	if( completed ) {
		todo = <>{title} - Completed</>
	} else {
		todo = <>{title}</>
	}

	return (
		<li onClick={toggleTodo} className="list-group-item">
			{todo}
		</li>
	)
}

export default TodoItem;