import React from "react";

const Input = ({ hook, setting }) => {
    const {autofocus, autocomplete, name, placeholder, type} = setting;
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