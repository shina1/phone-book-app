import React from "react";

const DisplayUserName = (props) => {
    return(
        <div>
            <h2>Welcome {props.userNameProp}</h2>
        </div>
    )
}

export default DisplayUserName