import React from 'react';
import categoriesCss from "./Categories.module.css";
import Category from "../list/Category";

let Categories = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <h1 className={categoriesCss.title}>Категории</h1>
        <div>
            <div className={categoriesCss.Categories}>
                <Category categoryName={"Название категории"} />
                {

                    props.categories.map(c=>
                    <Category categoryName={c.Name} id={c._id} delete={()=>props.delete(c._id)}/>
                    )
                }
            </div>
        </div>
    </div>)
};
export default Categories;