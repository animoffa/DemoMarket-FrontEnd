import {productsAPI} from "../admin/api/api";

const GET_PRODUCTS = 'admin/Products/GET_PRODUCTS';
const GET_PRODUCT = 'admin/Products/GET_PRODUCT';
const SET_PRODUCT = 'admin/Products/SET_PRODUCT';
const UNMOUNT_PRODUCT = 'admin/Products/UNMOUNT_PRODUCT';
const DELETE_PRODUCT = 'admin/Products/DELETE_PRODUCT';
const ADD_PRODUCT = 'admin/Products/ADD_PRODUCT';
const SET_COUNT = 'admin/Products/SET_COUNT';
const SET_CURRENT_PAGE = 'admin/Products/SET_CURRENT_PAGE';

let inicialState = {
    products: [],
    productsCount: 0,
    currentPage: 1,
    pageSize: 10,
    Name: null,
    Description: null,
    Products: null,
    Price: null,
    Color: null,
    Wireless: null,
    Backlight: null,
    Producer: null,
    Category: null,
    id: null,
};

const ProductsReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case GET_PRODUCT:
            return {
                ...state,
                id: action.product._id,
                Name: action.product.Name,
                Description: action.product.Description,
                Price: action.product.Price,
                Color: action.product.Color,
                Wireless: action.product.Wireless,
                Backlight: action.product.Backlight,
                Producer: action.product.Producer,
                Category: action.product.Category
            };
        case SET_PRODUCT:
            return {
                ...state,
                id: action.id._id,
                Name: action.id.Name,
                Description: action.id.Description,
                Price: action.id.Price,
                Color: action.id.Color,
                Wireless: action.id.Wireless,
                Backlight: action.id.Backlight,
                Producer: action.id.Producer,
                Category: action.id.Category

            };
        case UNMOUNT_PRODUCT:
            return {
                ...state,
                Name: null,
                Description: null,
                Price: null,
                Color: null,
                Wireless: null,
                Backlight: null,
                Producer: null,
                Category: null,
                id: null,

            };
        case DELETE_PRODUCT:
            let newProducts = [];
            state.products.forEach(p => {
                if (p._id === action.id) {
                } else {
                    newProducts.push(p);
                }
            });
            return {
                ...state,
                products: newProducts
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.newProduct, ...state.products]
            };
        case SET_COUNT:
            return {
                ...state,
                productsCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
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
export const unmountProduct = () => ({type: UNMOUNT_PRODUCT});
export const deleteProduct = (id) => ({type: DELETE_PRODUCT, id});
export const addProduct = (newProduct) => ({type: ADD_PRODUCT, newProduct});
export const setCount = (products) => ({type: SET_COUNT, count: products});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const getProductsAPI = (currentPage, pageSize) => async (dispatch) => {
    let response = await productsAPI.getProducts(currentPage, pageSize);
    dispatch(getProducts(response.data.products));
    dispatch(setCurrentPage(response.data.currentPage));
    dispatch(setCount(response.data.totalCount));
};
export const getProductByIDAPI = (id) => async (dispatch) => {
    let response = await productsAPI.getProductById(id);
    dispatch(getProductByID(response.data));
};
export const UpdateProductAPI = (id, Name, Description, Price, Color, Wireless, Backlight, Producer, Category) => async (dispatch) => {
    let response = await productsAPI.updateProductById(id, Name, Description, Price, Color, Wireless, Backlight, Producer, Category);
    dispatch(setProduct(response.data));
};
export const deleteProductAPI = (id) => async (dispatch) => {
    await productsAPI.deleteProduct(id);
    dispatch(deleteProduct(id));
};
export const addProductAPI = () => async (dispatch) => {
    let response = await productsAPI.addProduct();
    dispatch(addProduct(response.data));
};

export default ProductsReducer;