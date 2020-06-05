import {categoriesAPI, productsAPI} from "../admin/api/api";
import {deleteCategory} from "./CategoriesReducer";

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const SET_PRODUCT = 'SET_PRODUCT';
const UNMOUNT_PRODUCT='UNMOUNT_PRODUCT';
const DELETE_PRODUCT='DELETE_PRODUCT';

let inicialState = {
    products: [],
    product: null
};

const ProductsReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case GET_PRODUCT:
            return {...state, product: action.product};
        case SET_PRODUCT:
            return {
                ...state, product: {
                    Name: action.Name,
                    Description:action.Description,
                    Products:action.Products,
                    Price:action.Price,
                    Color:action.Color,
                    Wireless:action.Wireless,
                    Backlight:action.Backlight,
                    Producer:action.Producer,
                    Category:action.Category
                }
            };
        case UNMOUNT_PRODUCT:
            return{
                ...state, product: {
                    Name: null,
                    Description:null,
                    Products:null,
                    Price:null,
                    Color:null,
                    Wireless:null,
                    Backlight:null,
                    Producer:null,
                    Category:null
                }
            };
        case DELETE_PRODUCT:
            let newProducts=[];
            state.products.forEach(p =>{
                if (p._id===action.id){

                }else{
                    newProducts.push(p);
                }
            });
            return{...state,
                products:newProducts
            };
        default:
            return state;
    }
};
export const setProduct = (id, Name, Description, Products, Price, Color, Wireless, Backlight, Producer, Category) => ({
    type: SET_PRODUCT,
    id,
    Name,
    Description,
    Products,
    Price,
    Color,
    Wireless,
    Backlight,
    Producer,
    Category
});
export const getProducts = (products) => ({type: GET_PRODUCTS, products});
export const getProductByID = (product) => ({type: GET_PRODUCT, product});
export const unmountProduct =()=>({type: UNMOUNT_PRODUCT});
export const deleteProduct=(id)=>({type: DELETE_PRODUCT, id});

export const getProductsAPI = () => (dispatch) => {
    productsAPI.getProducts().then(response => {
        dispatch(getProducts(response.data));
    })
};
export const getProductByIDAPI = (id) => (dispatch) => {
    productsAPI.getProductById(id).then(response => {
        dispatch(getProductByID(response.data));
    })
};
export const UpdateProductAPI = (id, Name, Description, Price, Color, Wireless, Backlight, Producer, Category) => (dispatch) => {
    productsAPI.updateProductById(id, Name, Description, Price, Color, Wireless, Backlight, Producer, Category).then(response => {
        dispatch(setProduct(response.data));
    })
};
export const deleteProductAPI=(id)=>(dispatch)=>{
    productsAPI.deleteProduct(id).then(response=>{
        dispatch(deleteProduct(id));
    })
};
export default ProductsReducer;