import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Sidebar.css"
const Sidebar = () => {
    
    return(
        <div className="sidebar">
            <div className="image">

            </div>
        <nav className="navbar">
            <div className="pages">
                <Link className="link" to ="About">About</Link>
                <Link className="link" to ="Skills">My skills</Link>
                <Link className="link" to ="Hobbies">Hobbies</Link>
                <Link className="link" to ="Contact">Contact</Link>
            </div>
            <hr />
            
            <div className="socialMedia">
                <a href="https://github.com/AlexanderMendivil"><GitHubIcon className="icons"/></a>
                <a href="https://www.facebook.com/ivanzerro36/"><FacebookIcon className="icons"/></a>
                <a href="https://www.linkedin.com/in/ivan-alexander-mendivil-araujo-103479213/"><LinkedInIcon className="icons"/></a>
            </div>
        </nav>
        </div>
    );
};

export default Sidebar;