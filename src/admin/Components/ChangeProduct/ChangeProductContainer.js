import React from "react";
import {connect} from "react-redux";
import {getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct} from "../../../Redux/ProductsReducer";
import {getCategoriesAPI} from "../../../Redux/CategoriesReducer";
import ChangeProduct from "./ChangeProduct";
import Preloader from "../Preloader/Preloader";

class ChangeProductContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(15);
        this.props.getProductByIDAPI(id);
        this.props.getCategoriesAPI();
    }

    componentWillUnmount() {
        this.props.unmountProduct();
    }

    render() {
        if (!this.props.Name || !this.props.categories) {
            return <Preloader/>
        }
        return (
            <ChangeProduct product={this.props.product} updateProduct={this.props.UpdateProductAPI}
                           categories={this.props.categories}
                           Name={this.props.Name} Description={this.props.Description} Price={this.props.Price}
                           Color={this.props.Color} Wireless={this.props.Wireless} Backlight={this.props.Backlight}
                           Producer={this.props.Producer} Category={this.props.Category} id={this.props.id}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.Categories.categories,
        Name: state.Products.Name,
        Description: state.Products.Description,
        Price: state.Products.Price,
        Color: state.Products.Color,
        Wireless: state.Products.Wireless,
        Backlight: state.Products.Backlight,
        Producer: state.Products.Producer,
        Category: state.Products.Category,
        id: state.Products.id,

    }
};

export default connect(mapStateToProps, {
    getProductsAPI, getProductByIDAPI, UpdateProductAPI, unmountProduct, getCategoriesAPI
})(ChangeProductContainer);