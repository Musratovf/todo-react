import React from "react";
import Todoitem from "./TodoItem";

const TodoList = () => {
    return (
        <>
            <ul className="todo__list">
                <Todoitem/>
            </ul>
        </>
    )
}
export default TodoList