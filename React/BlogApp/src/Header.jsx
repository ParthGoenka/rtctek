import React from "react";
Header.defaultProps = {
    name: "unknown",
}
function Header(props){
    return(<header>
        <h1>Welcome&nbsp;{props.name}&nbsp;to Blogs</h1>
    </header>)
}


export default Header