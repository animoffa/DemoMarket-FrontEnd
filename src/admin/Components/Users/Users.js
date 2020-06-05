import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";

let Users = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Пользователи</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category productName={"Имя"} Productscount={"Заказы"} ProductsOfOrder={"Адрес"} StausOfOrder={"Имя"}/>
                {
                    props.users.map(p=>
                        <Category productName={p._id} Productscount={p.Basket} ProductsOfOrder={p.Mail?p.Mail:"-"} StausOfOrder={p.Name}/>
                    )
                }
            </div>
        </div>
    </div>)
};
export default Users;