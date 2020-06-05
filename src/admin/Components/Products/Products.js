import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";

let Products = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Продукты</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category productName={"Название продукта"} Productscount={"Цена"}/>
                {
                    props.products.map(p=>
                        <Category productName={p.Name} Productscount={p.Price?p.Price: "-"} id={p._id} delete={()=>props.delete(p._id)} />
                    )
                }

            </div>
        </div>
    </div>)
};
export default Products;