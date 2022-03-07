import React from "react";

function FooterBtn({footer, active, Completed}) {

    return (
        <>
        <div className="footer__wrap">
        <p className="foter-text">items left</p>
        <div className="buttons__flex">
        <button className="footer__btn">{footer}</button>
        <button className="footer__btn">{active}</button>
        <button className="footer__btn">{Completed}</button>
        </div>
        <button className="btn__clear">Clear completed</button>
        </div>
        </>
    )
}
export default FooterBtn;
