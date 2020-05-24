import React from 'react';
import CategoryCss from './Category.module.css';
import del from "../../images/icons8-удалить-26.png"
import edit from "../../images/icons8-редактировать-26.png"

let Category = (props) => {
    return (
        <div className={CategoryCss.categoryMain}>
            <div>
                {props.name}
            </div>
            <div className={CategoryCss.count}>
                {props.Productscount}
            </div>
            <div>
               <img src={edit} alt={edit}/>
            </div>
            <div>
                <img src={del} alt={del}/>
            </div>
        </div>
    )
};
export default Category;