import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
});
export const categoriesAPI = {
    getCategories() {
        return axios.get("http://localhost:3000/Categories").then((response) => {
            return response;
        })
    },
    getCategoryById(id) {
        return axios.get(`http://localhost:3000/Categories/${id}`);
    },
    updateCategoryById(Name, id, Description, Products) {
        return axios.put(`http://localhost:3000/Categories/update`, {
            Name: Name,
            id: id,
            Description: Description,
            Products: Products
        });
    },
    deleteCategory(id){
        return axios.delete(`http://localhost:3000/Categories/${id}`).then(response => {
            return response;
        })
    }

};
export const productsAPI = {
    getProducts() {
        return axios.get("http://localhost:3000/Products").then((response) => {
            return response;
        })
    },
    getProductById(id) {
        return axios.get(`http://localhost:3000/Products/${id}`).then((response) => {
            return response;
        })
    },
    updateProductById(id, Name, Description, Price, Color, Wireless, Backlight, Producer, Category) {
        return axios.put(`http://localhost:3000/Products/update`, {
            id: id, Name: Name, Description: Description, Price: Price,
            Color: Color, Wireless: Wireless, Backlight: Backlight,
            Producer: Producer, Category: Category
        }).then(response => {
            return response;
        })
    },
    deleteProduct(id){
        return axios.delete(`http://localhost:3000/Products/${id}`).then(response => {
            return response;
        })
    }
};
export const usersAPI = {
    getUsers() {
        return axios.get("http://localhost:3000/Users").then((response) => {
            return response;
        })
    }
};

export const ordersAPI = {

    getOrders() {
        return axios.get("http://localhost:3000/Orders").then((response) => {
            debugger
            return response;
        })
    }
};