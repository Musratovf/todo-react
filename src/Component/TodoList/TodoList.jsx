import React from "react";
import InputCheckBox from "./InputCheck";

function TodoList() {
    
    const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem("todos")) || []);
    const [type, setType] = React.useState("All")
    console.log(type);
    
  
    const deleteBtn = (evt) => {
        const todoId = evt.target.dataset.todoId - 0;
        
        const filtered = todos.filter(todo => todo.id !== todoId)
        window.localStorage.setItem("todos", JSON.stringify(filtered));
        setTodos(filtered)
    }
    
    const checkInput = (evt) => {
        const todoId = evt.target.dataset.todoId - 0
        
        const foundTodo = todos.find((todo) => todo.id === todoId)
        
        foundTodo.isComplited = !foundTodo.isComplited
        window.localStorage.setItem("todos", JSON.stringify([...todos]))
        setTodos([...todos])
        
    }

    const getreturnFunction = (_type, todos) => {
        if(type === "All") {
            return todos
        }
        if(type === "completed") {
            return todos.filter(t => t.isComplited)
        }
        if(type === "uncompleted") {
            return todos.filter(t => !t.isComplited)
        }
        else {
            return []
        }
        
    }
    
    return (
        <main className="main">
            <div className="item__inpout">
                <input onKeyUp={(evt) => {
                    evt.preventDefault()
                    if (evt.code === 'Enter') {
                        const InputNewValue = {
                            id: todos[todos.length - 1]?.id + 1 || 0,
                            text: evt.target.value.trim(),
                            isComplited: false,
                        }
                        window.localStorage.setItem("todos", JSON.stringify([...todos, InputNewValue]))
                        setTodos([...todos, InputNewValue])
                        evt.target.value = null
                    }
                }} className="todo__input" type="text" placeholder="What needs to be done?" />
                <span className="text__before"></span>
            </div>

            <ul className="todolist">
                {todos.length > 0 &&
                    getreturnFunction(type, todos).map((todo) => (
                        <InputCheckBox
                            key={todo.id} todo={todo}
                            deleteBtn={deleteBtn}
                            checkInput={checkInput}>
                            {todo.text}
                        </InputCheckBox>
                    ))}
            </ul>

            <div className="footer__wrap">
        <p className="foter-text">items left</p>
        <div className="buttons__flex">
        <button onClick={()=>setType("All")} className="footer__btn">All</button>
        <button onClick={()=>setType("completed")} className="footer__btn">completed</button>
        <button onClick={()=>setType("uncompleted")} className="footer__btn">uncompleted</button>
        </div>
        <button className="btn__clear">Clear completed</button>
        </div>         
            
        </main>
    )
}

export default TodoList