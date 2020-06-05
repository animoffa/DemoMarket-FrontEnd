import React from "react";
import {connect} from "react-redux";
import {getProductsAPI,getProductByIDAPI,UpdateProductAPI,unmountProduct} from "../../../Redux/ProductsReducer";
import ChangeProduct from "./ChangeProduct";

class ChangeProductContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(15);
        this.props.getProductByIDAPI(id);
    }

componentWillUnmount() {
        this.props.unmountProduct();
}

    render() {
        if (!this.props.product) {
            return 123
        }
        return (
            <ChangeProduct product={this.props.product} updateProduct={this.props.UpdateProductAPI}/>
        )

    }
};
let mapStateToProps = (state) => {
    return {
        product:state.Products.product,
    }
};

export default connect(mapStateToProps, {
    getProductsAPI,getProductByIDAPI,UpdateProductAPI,unmountProduct
})(ChangeProductContainer);