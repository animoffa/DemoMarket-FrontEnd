import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import List from "../list/List";
import add from "../../images/icons8-добавить-64.png";
import Paginator from "../Pagination/Paginator";

let Products = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <div className={categoriesCss.title}>
            <h1 className={categoriesCss.title}>Продукты</h1>
            <img src={add} alt="Добавить" onClick={() => {
                props.add()
            }} style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
        </div>
        <div>
            <div className={categoriesCss.Categories}>
                <List productName={"Название продукта"} Productscount={"Цена"}/>
                {
                    props.products.map(p =>
                        <List productName={p.Name} key={p._id} Productscount={p.Price ? p.Price : "-"} id={p._id}
                              delete={() => props.delete(p._id)}/>
                    )
                }

            </div>
        </div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   productsCount={props.productsCount} pageSize={props.pageSize}/>
    </div>)
};
export default Products;