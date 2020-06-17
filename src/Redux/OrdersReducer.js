import {ordersAPI} from "../admin/api/api";

const GET_ORDERS = 'admin/orders/GET_ORDERS';

let inicialState = {
    orders: []
};

const OrdersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        default:
            return state;
    }
};

export const getOrders = (orders) => ({type: GET_ORDERS, orders});

export const getOrdersAPI = () => async (dispatch) => {
    let response = await ordersAPI.getOrders();
    dispatch(getOrders(response.data));
};

export default OrdersReducer;