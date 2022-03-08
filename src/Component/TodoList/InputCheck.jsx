import React from "react";

function    InputCheckBox({ children, todo, deleteBtn, checkInput}) {
    console.log(todo);

    return (
        <>
            <div className="wrap-item">
            <li className="todos-items" 
            style={{ textDecoration: todo.isComplited ? "line-through" : "none" 
            
        }}
            >

                <span className="text__before"></span>

                <input
                data-todo-id={todo.id}
                className="input-check" type="checkbox"
                placeholder="What needs to be done?"
                onClick={checkInput}
                defaultChecked={todo.isComplited    }
                />

                {children}
                <button 
                onClick={deleteBtn} data-todo-id={todo.id} 
                className="btn-delete">&times; </button>
            </li>
                </div>
        </>
    )
}


export default InputCheckBox; 