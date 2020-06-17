import React from 'react';
import './App.css';
import Header from './admin/Components/Header/header';
import Sidebar from './admin/Components/Sidebar/sidebar';
import LogoPic from "./admin/Components/logoPic/logoPic"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CategoriesContainer from "./admin/Components/CategoriesAdmin/CategoriesContainer";
import ProductsContainer from "./admin/Components/Products/ProductsContainer";
import UsersContainer from "./admin/Components/Users/UsersContainer";
import OrdersContainer from "./admin/Components/Orders/OrdersContainer";
import ChangeCategoriesContainer from "./admin/Components/ChangeCategory/ChangeCategoryContainer"
import ChangeProductContainer from "./admin/Components/ChangeProduct/ChangeProductContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <LogoPic/>
                <div className="body">
                    <Sidebar/>
                    <div className="main__content">
                        <Switch>
                            <Route exact path={'/users'} component={UsersContainer}/>
                            <Route path='/orders' component={OrdersContainer}/>
                            <Route path='/products' component={ProductsContainer}/>
                            <Route path="/changecategory/:CategoryID?" render={() => <ChangeCategoriesContainer/>}/>
                            <Route path="/changeproduct/:ProductID?" render={() => <ChangeProductContainer/>}/>
                            <Route path='/' component={CategoriesContainer}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
