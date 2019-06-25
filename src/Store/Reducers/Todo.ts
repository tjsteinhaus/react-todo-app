const initialState = {
	todos: [
		{
			title: 'Todo 1',
			completed: false,
		},
		{
			title: 'Todo 2',
			completed: true,
		},
		{
			title: 'Todo 3',
			completed: false,
		},
	]
}

const TodoApp = ( state = initialState, action: any ) => {
	switch( action.type ) {
		case 'ADD_TODO':
			return Object.assign( {}, state, {
				todos: [
					...state.todos,
					{ 
						title: action.title,
						completed: false
					}
				]
			} );

		case 'TOGGLE_TODO':
			const toggleTodo = state.todos.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			});


			return Object.assign( {}, state, {
				todos: [...toggleTodo] } );

		default: 
			return state;
	}
}

export default TodoApp;