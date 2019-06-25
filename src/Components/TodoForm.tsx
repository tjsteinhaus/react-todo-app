import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoForm: React.FC = () => {
	const dispatch = useDispatch();

	const [ todoTitle, setTodoTitle ] = useState('')

	const addTodo = ( e: any ) => {
		e.preventDefault();

		dispatch( { type: 'ADD_TODO', title: todoTitle }  )

		setTodoTitle('');
	}

	return (
		<li className="list-group-item">
			<form onSubmit={addTodo}>
				<input type="text" id="todo" name="todo" className="form-control" placeholder="Enter todo..." onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} />
			</form>
		</li>
	) 
}

export default TodoForm;