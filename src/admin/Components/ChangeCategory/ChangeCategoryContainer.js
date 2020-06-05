import React from 'react';
import {getCategoryByID, getCategoriesByIDAPI, updateCategoryById} from "../../../Redux/CategoriesReducer";
import {getProductsAPI} from "../../../Redux/ProductsReducer"
import {connect} from "react-redux";
import ChangeCategory from "./ChangeCategory";

class ChangeCategoriesContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(16);
        this.props.getCategoriesByIDAPI(id);
        this.props.getProductsAPI();
    }


    render() {
        if (!this.props.category||!this.props.products) {
            return 123
        }
        return (
            <ChangeCategory category={this.props.category} updateCategory={this.props.updateCategoryById} products={this.props.products}/>
        )

    }
};
let mapStateToProps = (state) => {
    return {
        category: state.Categories.category,
        products:state.Products.products,
    }
};

export default connect(mapStateToProps, {
    getCategoriesByIDAPI,
    getCategoryByID,
    updateCategoryById,
    getProductsAPI
})(ChangeCategoriesContainer);