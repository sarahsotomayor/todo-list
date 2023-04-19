import './App.css';
import React, { useState } from 'react';

function App() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length == 0) {
        return;
    }

    const todoItem = {
        text: newTodo,
        complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
    };

    const handleTodoDelete = (delIndex) => {
    const filteredTodos = todos.filter((todos, index) => {
        return index !== delIndex; 
    });
    setTodos(filteredTodos);
    }

    const handleTodoCheckbox = (i) => {
    const updatedTodos = todos.map((todos, index) => {
        if (i == index) {
        const updatedTodos = {...todos, complete: !todos.complete};
        return updatedTodos;
    }
        return todos;
    });

    setTodos(updatedTodos);
    }

    return (
    <div className="App">
        <header>TODO LIST</header>

        <form onSubmit={(e) => {
        handleNewTodoSubmit(e);}}>
            <input onChange={(e) => {
            setNewTodo(e.target.value);
        }} type="text" />
            <button>Add</button>
        </form>

        {todos.map((todo, index) => {

        const todoClasses = ["bold"];
        
        if (todo.complete) {
            todoClasses.push("line-through")
        }      

        return (
            <div key={index}>
            <input type="checkbox" onChange={(e) => {
                handleTodoCheckbox(index);
            }}
                checked={todo.complete}/>
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(e) => {
                handleTodoDelete(index);
            }}>Delete</button>
            </div>  
        );
        })}
    </div> 
    );
}

export default App;
