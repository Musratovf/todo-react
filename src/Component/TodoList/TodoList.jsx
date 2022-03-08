import React from "react";
import InputCheckBox from "./InputCheck";

function TodoList() {
    const deleteBtn = (evt) => {
        const todoId = evt.target.dataset.todoId - 0;

        const filtered = todos.filter(todo => todo.id !== todoId)
        setTodos(filtered)
    }

    const checkInput = (evt) => {
        const todoId = evt.target.dataset.todoId - 0

        const foundTodo = todos.find((todo) => todo.id === todoId)

        foundTodo.isComplited = !foundTodo.isComplited
        setTodos([...todos])
        
    }

    const [todos, setTodos] = React.useState([
        {
            id: 0,
            text: "Wake up",
            isComplited: false,
        },

        {
            id: 1,
            text: "Wake up",
            isComplited: false,
        }
    ]);
    return (
        <main className="main">
            <li className="item__inpout">
                <input onKeyUp={(evt) => {
                    evt.preventDefault()
                    if(evt.target.value = null) {
                        alert("jdvcn")
                   }
                    if (evt.code === 'Enter') {
                        const InputNewValue = {
                            id: todos[todos.length - 1]?.id + 1 || 0,
                            text: evt.target.value.trim(),
                            isComplited: false,
                        }
                        
                        setTodos([...todos, InputNewValue])
                        evt.target.value = null
                    }
                }} className="todo__input" type="text" placeholder="What needs to be done?" />
                <span className="text__before"></span>
            </li>

            <ul className="todolist">
                {todos.length > 0 &&
                    todos.map((todo) => (
                        <InputCheckBox
                            key={todo.id} todo={todo}
                            deleteBtn={deleteBtn}
                            checkInput={checkInput}>
                            {todo.text}
                        </InputCheckBox>
                    ))}
            </ul>
        </main>
    )
}

export default TodoList