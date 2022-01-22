import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {

    return(
        <div>
        <nav className="navbar">
            <Link to ="About">About</Link>
            <Link to ="Skills">My skills</Link>
            <Link to ="Hobbies">Hobbies</Link>
            <Link to ="Contact">Contact</Link>
            <hr />
        </nav>
        </div>
    );
};

export default Sidebar;