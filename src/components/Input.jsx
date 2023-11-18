import React from "react";

const Input = ({ hook, autofocus, autocomplete, name, placeholder, type }) => {
    const [state, setState] = hook;

    return(
        <label>
            <input 
                type={type}
                value={state}
                className={name}
                placeholder={placeholder}
                onChange={(event) => setState(event.target.value)}
                autoFocus = {autofocus}
                autoComplete={autocomplete}
                required
            />
        </label>
    );
}

export default Input;