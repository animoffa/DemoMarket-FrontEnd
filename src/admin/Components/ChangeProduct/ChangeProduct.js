import React, {Component} from 'react';
import Css from "./ChangeProduct.module.css";
import {UpdateProductAPI} from "../../../Redux/ProductsReducer";

let ChangeProduct = (props) => {

    return (<div className={Css.CategoriesMain}>
        <h1 className={Css.title}>Изменение товара</h1>

        <div>
            <div className={Css.Form}>
                <div className={Css.FormTitles}>
                    <div>Название</div>
                    <div>Описание</div>
                    <div>Цена</div>
                    <div>Цвет</div>
                    <div>Беспроводная</div>
                    <div>Подсветка</div>
                    <div>Производитель</div>
                    <div>Категория</div>
                </div>
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <ChangeForm product={props.product} UpdateProduct={props.updateProduct}/>
                    </form>
                </div>
            </div>
        </div>
    </div>)
};

class ChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.product.Name,
            Description: this.props.product.Description,
            Price: this.props.product.Price,
            Color: this.props.product.Color,
            Wireless: this.props.product.Wireless,
            Backlight: this.props.product.Backlight,
            Producer: this.props.product.Producer,
            Category: this.props.product.Category,
        }
    }

    Change(e) {
        let value = e.value;
        let prop = e.name;
        this.setState((state) => {
            return {
                ...state,
                [prop]: value
            }
        })
    }

    SaveChanges() {
        this.props.UpdateProduct(this.props.product._id, this.state.Name, this.state.Description, this.state.Price, this.state.Color, this.state.Wireless,
            this.state.Backlight, this.state.Producer, this.state.Category);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={Css.formFields}>
                <fieldset className={Css.fildset}>
                    <input name={"Name"} onChange={(e) => this.Change(e.currentTarget)} autoFocus={true} id={"nme"}
                           defaultValue={this.props.product.Name}
                           className={Css.as} required/>
                    <label htmlFor="nme"><span>Name</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Description"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.product.Description} id={"d"} className={Css.as}
                           required/>
                    <label htmlFor="d"><span>Description</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Price"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.product.Price} id={"p"} className={Css.as} required/>
                    <label htmlFor="p"><span>Price</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Color"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.product.Color} id={"c"} className={Css.as} required/>
                    <label htmlFor="c"><span>Color</span></label>
                </fieldset>

                <input type="checkbox" name={"Wireless"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.product.Wireless}
                       className={Css.CheckBoxes}/>

                <input type="checkbox" name={"Backlight"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.product.Backlight}
                       className={Css.CheckBoxes}/>

                <fieldset className={Css.fildset}>
                    <input name={"Producer"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.product.Producer} id={"prod"} className={Css.as}
                           required/>
                    <label htmlFor="prod"><span>Producer</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Category"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.product.Category} id={"cat"} className={Css.as}
                           required/>
                    <label htmlFor="cat"><span>Category</span></label>
                </fieldset>

                <button className={Css.SaveButton} onClick={() => this.SaveChanges()}>Save changes</button>
            </form>
        )
    }
}

export default ChangeProduct;