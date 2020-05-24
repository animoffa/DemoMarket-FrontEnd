import React from 'react';
import picCss from './logoPic.module.css';
import logo from "../../images/icons8-клавиатура-64.png"
import {Field, reduxForm} from "redux-form";
import SearchIcon from "../../images/icons8-поиск-50.png"

let logoPic =(props)=>{
    const onSubmit = (formData) => {
        props.login(formData.search);
    };
    return <div className={picCss.main}>
<img src={logo} alt="" />
        <div className={picCss.stripedText}>Demo market</div>
        <div >
            <form onSubmit={props.handleSubmit}>
                <ChangeReduxForm onSubmit={onSubmit}/>
            </form>
        </div>
        </div>
};
const ChangeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}  className={picCss.search} >
            <Field type="search" className={picCss.InputSearch} placeholder={"Search..."}  component={"input"} name={"search"}/>
            <button className={picCss.ButtonSearch}><img src={SearchIcon} width="20px" className={picCss.img} alt={"Найти"}/></button>
        </form>
    )
};

const ChangeReduxForm = reduxForm({
    form: 'login'
})(ChangeForm);
export default logoPic;