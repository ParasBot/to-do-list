import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo , id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        //console.log(id);
        //let copy = todos.filter((todo) => todo.id != id);
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        console.log(copy);
    }
    let markAllDone = () => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));
    };
    let markAsDone = (id) => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        ));
    }
    return(
        <div>
            <input placeholder="Add task" value={newTodo} onChange={updateTodo}/>
            
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h3>To Do List</h3>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        <br />
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    );
}