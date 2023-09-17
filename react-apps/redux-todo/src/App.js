import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodo } from './redux/actions/TodoActions';

function App() {
  const [todo, setTodo] = useState('');
  // add comments
  const dispatch = useDispatch();
  const TodoState = useSelector(state => state.Todo);

  const { todos } = TodoState;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    dispatch(AddTodoAction(todo.trim()));
    setTodo('');
  }

  const handleDelete = (todo) => {
    dispatch(RemoveTodo(todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List Using Redux</h2>
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            placeholder='Enter the todo'
            type="text"
            className="todo-input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="add-todo">Add</button>
          <ul className="all-todos">
            {todos && todos.map((t) => (
              <li key={t.id} className="single-todo">
                <span className="todo-text">{t.todo}</span>
                <button onClick={() => handleDelete(t)} className="delete-todo">Remove</button>
              </li>
            ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
