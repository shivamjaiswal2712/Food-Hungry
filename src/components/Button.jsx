import React from "react";

const Button = ({ onClick, children, theme }) => {
	return (
		<button className={"btn btn-" + theme} type="button" onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;