import React from "react";

const Lists = ({ list, Component }) => {
    const Items = list?.map((item) => <Component key={item.id} item={item} />);

    return(
        <ul>{Items}</ul>
    );
}

export default Lists;