import React from 'react';
import sidebarCss from "./sidebarItem.module.css";
import {NavLink} from "react-router-dom";

let SidebarItem=(props)=>{
    return (
            <NavLink to={props.route} className={sidebarCss.sidebarNav}>
                {props.text}
            </NavLink>
    )
};
export default SidebarItem;