import React from "react";

const Button = ({ onClick, children, theme}) => {
    return(
        <button className={"btn btn-" + theme} type="button" onClick={onClick}>
            {children}
            view
        </button>
    )
}

export default Button;