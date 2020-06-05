import React from 'react';
import categoriesCss from "../CategoriesAdmin/Categories.module.css";
import Category from "../list/Category";
import ChangeText from "./ChangeText";
import edit from "../../images/icons8-редакт.png"

let ChangeCategory = (props) => {
    return (<div className={categoriesCss.CategoriesMain}>
        <div className={categoriesCss.editText}>
            <ChangeText status={props.category.Name} UpdateStatus={props.updateCategory} id={props.category._id}
                        Description={props.category.Description} Products={props.category.Products} fontSize={"26px"}/>
            <img src={edit} style={{marginLeft: "14px", width: "20px", height: "20px", marginTop: "7px"}}/>
        </div>
        <div className={categoriesCss.editText}>
            <ChangeText status={props.category.Description} UpdateStatus={props.updateCategory} id={props.category._id}
                        Name={props.category.Name} Products={props.category.Products} fontSize={"22px"}
                        isDescription={true}/>
            <img src={edit} style={{marginLeft: "14px", width: "20px", height: "20px", marginTop: "7px"}}/>
        </div>
        <div>
            <div className={categoriesCss.Categories}>
                <Category productName={"Название продукта"} Productscount={"Цена"}/>
                {
                    props.products.map(product=>{
                      if (product.Category===props.category._id)
                      return (  <Category productName={product.Name} Productscount={product.Price} id={product._id}/>)}
                    )
                }
            </div>
        </div>
    </div>)
};
export default ChangeCategory;