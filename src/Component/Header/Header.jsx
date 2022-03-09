import React from "react";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
function Header() {
    return (
        <div className="wrapper__all">
                <h1 className="heading">todos</h1>
            <header className="header">
                <TodoList/>
                <Footer/>
            </header>
        </div>
    )
}

export default Header;