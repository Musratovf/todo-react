import React from "react";
import TodoInput from "../Header/TodoInput"
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import FooterBtn from "../Buttons/FooterBtns";
function Header() {
    return (
        <div className="wrapper__all">
                <h1 className="heading">todos</h1>
            <header className="header">
                <TodoInput />
                <TodoList/>
                <TodoList/>
                <TodoList/>
                <FooterBtn footer="All" active="active"  Completed=" Completed"/>
                <Footer/>
            </header>
        </div>
    )
}

export default Header;