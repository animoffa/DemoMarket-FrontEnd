import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";

let ChangeCategory = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>{props.CategoryName}</h1>
        <h3 className={categoriesCss.title}>{props.CategoryDescription}</h3>
        <div>
            <div className={categoriesCss.Categories}>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                {/*array via map*/}
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
            </div>
        </div>
    </div>)
};
export default ChangeCategory;