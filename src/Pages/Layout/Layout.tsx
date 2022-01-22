import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

import "./Layout.css"
const Layout = () => {

    return(
        <div className="layout">
            <Sidebar/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;