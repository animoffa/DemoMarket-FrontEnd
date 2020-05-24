import React from 'react';
import categoriesCss from "./Categories.module.css";
import Category from "../list/Category";

let Categories = () => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Категории</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category name={"Название категории"} Productscount={"Кол-во продуктов"}/>
                <Category name={"Название категории"} Productscount={"Кол-во продуктов"}/>
                <Category name={"Название категории"} Productscount={"Кол-во продуктов"}/>
                <Category name={"Название категории"} Productscount={"Кол-во продуктов"}/>

            </div>
        </div>
    </div>)
};
export default Categories;