import React from "react";

const SumNames = (props) => {
    return (
        <span ref={props.spanValue}>Всего имен: {props.names.length}</span>
    )
};

export default SumNames;