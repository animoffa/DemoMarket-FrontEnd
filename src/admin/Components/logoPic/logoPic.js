import React from 'react';
import picCss from './logoPic.module.css';
import logo from "../../images/icons8-клавиатура-64.png"

let logoPic = () => {
    return <div className={picCss.main}>
        <img src={logo} alt=""/>
        <div className={picCss.stripedText}>Demo market</div>
    </div>
};
export default logoPic;