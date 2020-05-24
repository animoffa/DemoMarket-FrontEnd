import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";

let Products = () => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Продукты</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                <Category name={"Название продукта"} Productscount={"Цена"}/>
                <Category name={"Название продукта"} Productscount={"Цена"}/>

            </div>
        </div>
    </div>)
};
export default Products;