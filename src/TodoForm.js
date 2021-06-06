import React from 'react'
import {useForm} from 'react-hook-form';

const TodoForm = ({todo, onSubmit}) =>{
    const {register, handleSubmit} =useForm({
        defaultValues:{
            text: todo ? todo.text : "", 
            name : todo ? todo.name : "",
            surname : todo ? todo.surname : ""
    },
    });

    const submitHandler = handleSubmit((data) =>{
       onSubmit(data);  
    });

    return(
        
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input 
                        className="form-control" 
                        {...register('text', { required: true })} 
                        type="text" 
                        name="text" 
                        id="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                        className="form-control" 
                        {...register('name', { required: true })} 
                        type="text" 
                        name="name" 
                        id="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surame:</label>
                        <input 
                        className="form-control" 
                        {...register('surname', { required: true })} 
                        type="text" 
                        name="surname" 
                        id="surname"
                        />
                    </div>
                  
                    <div className="form-group">
                       <button 
                       type="submit" 
                       className="btn btn-primary mt-3">
                           Save Todo
                           </button>
                    </div>
                </form>
           
    ) 
}
export default TodoForm;