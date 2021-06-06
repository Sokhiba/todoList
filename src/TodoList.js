import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import {getTodos, Delete } from './api'
const TodoList =() =>{

    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(()=>{
      const fetchItems = async () =>{
          const todos = await getTodos()
          setItems(todos)
        }
      
      fetchItems() 
    }, []);

    const handleDelete = async(id) =>{
        await Delete(id)
        history.push("/")
      
    }

    return(
        <div className="container">
            <div className="mt-3">
                <h3>Todo List</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           items.map( todo => (
                               <tr key={todo._id}>
                                   <td>
                                       {todo.text}
                                   </td>
                                   <td>
                                       {todo.name}
                                   </td>
                                   <td>
                                       {todo.surname}
                                   </td>
                                   <td>
                                       <Link to={`/edit/${todo._id}`}>Edit</Link>
                                   </td>
                                   <td>
                                       <button className="btn btn-danger p-1" onClick={() => handleDelete(todo._id)}>Delete</button>
                                   </td>
                               </tr>
                           ))
                           }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TodoList;