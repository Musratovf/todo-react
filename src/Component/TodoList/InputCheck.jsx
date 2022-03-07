import React from "react";

function InputCheckBox({ children, todo, deleteBtn}) {
    console.log(todo);

    return (
        <>
            <div className="wrap-item">
            <li className="todos-items">
                <span className="text__before"></span>
                <input className="input-check" type="checkbox" placeholder="What needs to be done?" />
                {children}
                <button onClick={deleteBtn} data-todo-id={todo.id}  className="btn-delete">&times; </button>
            </li>
                </div>
        </>
    )
}


export default InputCheckBox; 