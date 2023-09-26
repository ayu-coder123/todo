import React, { useState } from 'react'
export default function TodoList() {
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState("");
    
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
    const handlechange=(e)=>{
setInput(e.target.value);
    }
  return (
   <>
   <div className="todo-list">
    <h1>To-do list</h1>
    <div className="add-todo">
        <input type="text" name="text" placeholder="Add a task" value={input} onChange={handlechange}/>
        <button className='button' onClick={addTodo}>+</button>
    </div>
    <div className="box">{input}</div>
    <ul>
        {todos.map((todo,index) => (
          <li key={index}>
            {todo}
            <button className='button1' onClick={() => deleteTodo(index)}>-</button>
          </li>
        ))}
      </ul>
   </div>
   </>
  )
}
