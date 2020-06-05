import React from 'react';
import {getProducts,getProductsAPI,deleteProductAPI} from "../../../Redux/ProductsReducer";
import {connect} from "react-redux";
import Products from "./Products";

class ProductsContainer extends React.Component{
    componentDidMount() {
        this.props.getProductsAPI();
    }
    render(){
        return (
            <Products products={this.props.products} delete={this.props.deleteProductAPI}/>
        )
    }
};
let mapStateToProps=(state)=>{
    return {
        products:state.Products.products
    }

};
export default connect(mapStateToProps, { getProductsAPI,getProducts,deleteProductAPI})(ProductsContainer);