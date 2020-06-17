import React, {Component} from 'react';
import Css from "./ChangeProduct.module.css";

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
                        <ChangeForm product={props.product} UpdateProduct={props.updateProduct}
                                    categories={props.categories} Name={props.Name} Description={props.Description}
                                    Price={props.Price}
                                    Color={props.Color} Wireless={props.Wireless} Backlight={props.Backlight}
                                    Producer={props.Producer} Category={props.Category} id={props.id}/>
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
            Name: this.props.Name,
            Description: this.props.Description,
            Price: this.props.Price,
            Color: this.props.Color,
            Wireless: this.props.Wireless,
            Backlight: this.props.Backlight,
            Producer: this.props.Producer,
            Category: this.props.Category,
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
        this.props.UpdateProduct(this.props.id, this.state.Name, this.state.Description, this.state.Price, this.state.Color, this.state.Wireless,
            this.state.Backlight, this.state.Producer, this.state.Category);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={Css.formFields}>
                <fieldset className={Css.fildset}>
                    <input name={"Name"} onChange={(e) => this.Change(e.currentTarget)} autoFocus={true} id={"nme"}
                           defaultValue={this.props.Name}
                           className={Css.as} required/>
                    <label htmlFor="nme"><span>Name</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Description"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.Description} id={"d"} className={Css.as}
                           required/>
                    <label htmlFor="d"><span>Description</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Price"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.Price} id={"p"} className={Css.as} required/>
                    <label htmlFor="p"><span>Price</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"Color"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.Color} id={"c"} className={Css.as} required/>
                    <label htmlFor="c"><span>Color</span></label>
                </fieldset>

                <input type="checkbox" name={"Wireless"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.Wireless}
                       className={Css.CheckBoxes}/>

                <input type="checkbox" name={"Backlight"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.Backlight}
                       className={Css.CheckBoxes}/>

                <fieldset className={Css.fildset}>
                    <input name={"Producer"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.Producer} id={"prod"} className={Css.as}
                           required/>
                    <label htmlFor="prod"><span>Producer</span></label>
                </fieldset>

                <fieldset className={Css.fildset}>
                    <select className={Css.selectField} name={"Category"} value={this.props.Category}
                            onChange={(e) => this.Change(e.currentTarget)}>
                        <option>Выберите категорию</option>
                        {
                            this.props.categories.map(m =>
                                <option value={m._id} key={m._id}>{m.Name}</option>
                            )}
                    </select>
                </fieldset>
                <button className={Css.SaveButton} onClick={() => this.SaveChanges()}>Save changes</button>
            </form>
        )
    }
}

export default ChangeProduct;