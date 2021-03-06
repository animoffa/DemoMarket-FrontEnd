import React from 'react';
import {connect} from "react-redux";
import {getCategoryByID, getCategoriesByIDAPI, updateCategoryById} from "../../../redux/CategoriesReducer";
import {getProductsAPI} from "../../../redux/ProductsReducer"
import ChangeCategory from "./ChangeCategory";
import Preloader from "../Preloader/Preloader";

class ChangeCategoriesContainer extends React.Component {
    componentDidMount() {
        let id = window.location.pathname.slice(15);
        this.props.getCategoriesByIDAPI(id);
        this.props.getProductsAPI();
    }


    render() {
        if (!this.props.category) {
            return <Preloader/>
        }
        return (
            <ChangeCategory category={this.props.category} updateCategory={this.props.updateCategoryById}
                            products={this.props.products}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        category: state.Categories.category,
        products: state.Products.products,
    }
};

export default connect(mapStateToProps, {
    getCategoriesByIDAPI,
    getCategoryByID,
    updateCategoryById,
    getProductsAPI
})(ChangeCategoriesContainer);