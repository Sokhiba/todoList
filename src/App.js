import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <ul className="navbar-nav mr-auto ">
        <li className="navbar-item">
          <Link to="/" className="nav-link ">Todos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link ">Create Todo</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route exact path="/edit/:id" component={EditTodo}/>
      <Route exact path="/create" component={CreateTodo}/>
    </Switch>
    </>
  )
}

export default App;
