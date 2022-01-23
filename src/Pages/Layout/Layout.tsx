import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

import "./Layout.css"
const Layout = () => {

    return(
        <div className="layout">
            <div className="sideMenu">
            <Sidebar/>

            </div>
            <div className="screens">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;