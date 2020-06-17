import React from 'react';
import Categories from "./Categories";
import {getCategories, getCategoriesAPI, deleteCategoryAPI, addCategoryAPI} from "../../../Redux/CategoriesReducer";
import {connect} from "react-redux";

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.getCategoriesAPI();
    }

    render() {
        return (
            <Categories categories={this.props.categories} delete={this.props.deleteCategoryAPI}
                        add={this.props.addCategoryAPI}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.Categories.categories
    }

};
export default connect(mapStateToProps, {
    getCategoriesAPI,
    getCategories,
    addCategoryAPI,
    deleteCategoryAPI
})(CategoriesContainer);