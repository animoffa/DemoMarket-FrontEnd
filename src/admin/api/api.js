import * as axios from "axios";

export const categoriesAPI = {
    getCategories() {
        return axios.get("http://localhost:3000/Categories")
    },
    getCategoryById(id) {
        return axios.get(`http://localhost:3000/Categories/${id}`);
    },
    updateCategoryById(name, id, description, products) {
        return axios.put(`http://localhost:3000/Categories/update`, {
            name: name,
            id: id,
            description: description,
            products: products
        });
    },
    deleteCategory(id){
        return axios.delete(`http://localhost:3000/Categories/${id}`)
    },
    addCategory(){
        return axios.post(`http://localhost:3000/Categories/add`,{name:"Введите название"})

    }
};
export const productsAPI = {
    getProducts(currentPage,pageSize) {
        return axios.get(`http://localhost:3000/Products?pageNo=${currentPage}&size=${pageSize}`)
    },
    getProductById(id) {
        return axios.get(`http://localhost:3000/Products/${id}`)
    },
    updateProductById(id, name, description, price, color, wireless, backlight, producer, category) {
        return axios.put(`http://localhost:3000/Products/update`, {
            id: id, name: name, description: description, price: price,
            color: color, wireless: wireless, backlight: backlight,
            producer: producer, category: category
        }).then(response => {
            return response;
        })
    },
    deleteProduct(id){
        return axios.delete(`http://localhost:3000/Products/${id}`)
    },
    addProduct(){
        return axios.post(`http://localhost:3000/Products/add`,{name:"Введите название"})
    }
};
export const usersAPI = {
    getUsers() {
        return axios.get("http://localhost:3000/Users")
    }
};

export const ordersAPI = {
    getOrders() {
        return axios.get("http://localhost:3000/Orders")
    }
};