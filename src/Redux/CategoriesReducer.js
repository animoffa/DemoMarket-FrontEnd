import {categoriesAPI} from "../admin/api/api";
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_CATEGORY="GET_CATEGORY";
const SET_CATEGORY="SET_CATEGORY";
const DELETE_CATEGORY='DELETE_CATEGORY';

let inicialState = {
    categories:[],
    category:null,
    Name:null,
    Description:null,
    Products:null,
};

const AppReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.categories
            };
        case GET_CATEGORY:
            return{...state, category:action.category};
        case SET_CATEGORY:
            return{...state, Name:action.Name, Description:action.Description,Products:action.Products};
        case DELETE_CATEGORY:
            let newCategories=[];
            state.categories.forEach(category =>{
                console.log(category._id);
                if (category._id===action.id){

                }else{
                    newCategories.push(category);
                }
            });
            return{...state,
                categories:newCategories
            };
            default:
            return state;
    }
};
export const getCategories = (categories) => ({type: GET_CATEGORIES,categories});
export const getCategoryByID=(category)=>({type: GET_CATEGORY, category});
export const setcategory=(Name,Description,Products)=>({type: SET_CATEGORY,Name,Description,Products})
export const deleteCategory=(id)=>({type: DELETE_CATEGORY,id});

export const getCategoriesAPI = () => (dispatch) => {

    categoriesAPI.getCategories().then(response => {
        dispatch(getCategories(response.data));
    })
};
export const getCategoriesByIDAPI = (id) => (dispatch) => {
            categoriesAPI.getCategoryById(id).then(response => {
                dispatch(getCategoryByID(response.data));
            });
};
export const updateCategoryById=(Name,id,Description,Products)=>(dispatch)=>{
    categoriesAPI.updateCategoryById(Name,id,Description,Products).then(response=>{
        dispatch(setcategory(Name,Description,Products))
    })
};
export const deleteCategoryAPI=(id)=>(dispatch)=>{
  categoriesAPI.deleteCategory(id).then(response=>{
      dispatch(deleteCategory(id));
  })
};
export default AppReducer;