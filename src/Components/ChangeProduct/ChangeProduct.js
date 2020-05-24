import React from 'react';
import Css from "./ChangeProduct.module.css";
import {Field, reduxForm} from "redux-form";

let ChangeProduct = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.Name, formData.Descriptor, formData.Price, formData.Color,
            formData.Wireless, formData.Backlight, formData.Producer, formData.Category);
    };
    return (<div className={Css.CategoriesMain}>
        <h1 className={Css.title}>Изменение товара</h1>

        <div>
            <div className={Css.Form}>
                <div className={Css.FormTitles}>
                    <div>Название</div>
                    <div>Описание</div>
                    <div>Цена</div>
                    <div>Цвет</div>
                    <div>Беспроводная</div>
                    <div>Подсветка</div>
                    <div>Производитель</div>
                    <div>Категория</div>
                </div>
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <ChangeReduxForm onSubmit={onSubmit}/>
                    </form>
                </div>
            </div>
        </div>
    </div>)
};

const ChangeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Css.formFields}>

            <fieldset className={Css.fildset}>
                <Field name={"Name"} component={"input"} id={"nme"}  className={Css.as} required/>
                <label htmlFor="nme"><span>First Name</span></label>
            </fieldset>
            <fieldset className={Css.fildset}>
                <Field name={"Descriptor"}  component={"input"} id={"d"} className={Css.as} required/>
                <label htmlFor="d"><span>Description</span></label>
            </fieldset>
            <fieldset className={Css.fildset}>
            <Field  name={"Price"}   component={"input"} id={"p"} className={Css.as} required/>
            <label htmlFor="p"><span>Price</span></label>
        </fieldset>
            <fieldset className={Css.fildset}>
                <Field  name={"Color"}   component={"input"} id={"c"} className={Css.as} required/>
                <label htmlFor="c"><span>Color</span></label>
            </fieldset>


            <Field type="checkbox" name={"Wireless"} component={"input"} className={Css.CheckBoxes}/>

            <Field type="checkbox" name={"Backlight"} component={"input"} className={Css.CheckBoxes}/>

            <fieldset className={Css.fildset}>
                <Field  name={"Producer"}   component={"input"} id={"prod"} className={Css.as} required/>
                <label htmlFor="prod"><span>Producer</span></label>
            </fieldset>
            <fieldset className={Css.fildset}>
                <Field  name={"Category"}  component={"input"} id={"cat"} className={Css.as} required/>
                <label htmlFor="cat"><span>Category</span></label>
            </fieldset>

            <button className={Css.SaveButton}>Save changes</button>
        </form>
    )
};

const ChangeReduxForm = reduxForm({
    form: 'login'
})(ChangeForm);
export default ChangeProduct;