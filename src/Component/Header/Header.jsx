import React from "react";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import FooterBtn from "../Buttons/FooterBtns";
function Header() {
    return (
        <div className="wrapper__all">
                <h1 className="heading">todos</h1>
            <header className="header">
                <TodoList/>
                <FooterBtn footer="All" active="active"  Completed=" Completed"/>
                <Footer/>
            </header>
        </div>
    )
}

export default Header;