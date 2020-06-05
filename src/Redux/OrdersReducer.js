import {ordersAPI} from "../admin/api/api";
const GET_ORDERS = 'GET_ORDERS';


let inicialState = {
    orders:[]
};

const OrdersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders:action.orders
            };
        default:
            return state;
    }
};

export const getOrders = (orders) => ({type: GET_ORDERS,orders});

export const getOrdersAPI = () => (dispatch) => {
    ordersAPI.getOrders().then(response => {
        dispatch(getOrders(response.data));
    })
};

export default OrdersReducer;