import React from 'react';

import TodoList from './Components/TodoList';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
