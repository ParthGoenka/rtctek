import React from "react";
function Footer(props)
{
    return(<footer>
        <h3>&copy;{new Date().getFullYear()}&nbsp;{props.name}</h3>
    </footer>)
}
export default Footer