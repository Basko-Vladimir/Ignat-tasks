import React from "react";

const ShowNames = (props) => {
    return (
        <div>
            {props.names.map( (n, i) => <span key={i}>{n} </span>)}
        </div>
    )
};

export default ShowNames;