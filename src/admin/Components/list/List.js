import React from 'react';
import CategoryCss from './List.module.css';
import del from "../../images/icons8-удалить-навсегда-32.png"
import edit from "../../images/icons8-редактировать-26.png"
import {NavLink} from "react-router-dom";

let List = (props) => {
    return (
        <div className={CategoryCss.categoryMain}>
            <div className={CategoryCss.width}>
                {props.categoryName ? props.categoryName : props.productName}
            </div>
            <div className={CategoryCss.count}>
                {props.Productscount}
            </div>
            <div>{props.ProductsOfOrder ? <div className={CategoryCss.count}>{props.ProductsOfOrder}</div> :
                <NavLink to={props.categoryName ? `/changecategory/${props.id}` : `/changeproduct/${props.id}`}><img
                    src={edit} alt={edit}/></NavLink>}
            </div>
            <div>{props.StausOfOrder ? <div>{props.StausOfOrder}</div> :
                <img src={del} alt={del} onClick={props.delete}/>}
            </div>
        </div>
    )
};
export default List;