import React from "react";

export function Post ( {title, body }) {
    // const=props;
    return(
        <>
            <h4>{title}</h4>
            <p>{body}</p>
        </>
    )
}