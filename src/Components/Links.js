import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign In</Link>
            <Link to="/student">Student</Link>
            <Link to="/helper">Helper</Link>
        </div>
    )
}

export default Links;