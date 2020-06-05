import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";

let Orders = (props) => {

    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Заказы</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category categoryName={"ID Заказа"} Productscount={"ID Пользователя"} ProductsOfOrder={"ID Продукта"} StausOfOrder={"Статус"}/>
                {
                    props.orders.map(p=>
                        <Category productName={p._id} Productscount={p.UserID} ProductsOfOrder={p.ProductsID}  StausOfOrder={p.Status} />
                    )
                }
            </div>
        </div>
    </div>)
};
export default Orders;