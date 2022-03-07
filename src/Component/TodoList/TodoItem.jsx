import React from "react";
import Buttons from "../Buttons/Button";
import FooterBtn from "../Buttons/FooterBtns";

const Todoitem = () => {
    return (
        <li className="chechkbox">
            <label className="label">
                <input className="check_input" type="checkbox"/>
                    <span className="checkmark"></span>
            </label>
                    <h5 className="input-text">bnnma</h5>
            <Buttons type="×" />

        </li>
    )
}
export default Todoitem;