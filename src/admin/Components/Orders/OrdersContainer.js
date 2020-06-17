import React from 'react';
import {getOrders, getOrdersAPI} from "../../../Redux/OrdersReducer";
import {connect} from "react-redux";
import Orders from "./Orders";

class OrdersContainer extends React.Component {
    componentDidMount() {
        this.props.getOrdersAPI();
    }

    render() {
        return <Orders orders={this.props.orders}/>
    }
}

let mapStateToProps = (state) => {
    return {
        orders: state.Orders.orders
    }

};
export default connect(mapStateToProps, {getOrders, getOrdersAPI})(OrdersContainer);