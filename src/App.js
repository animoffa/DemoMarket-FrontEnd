import React from 'react';
import Header from './admin/components/Header/header';
import Sidebar from './admin/components/Sidebar/sidebar';
import LogoPic from "./admin/components/logoPic/logoPic"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import CategoriesContainer from "./admin/components/CategoriesAdmin/CategoriesContainer";
import ProductsContainer from "./admin/components/Products/ProductsContainer";
import UsersContainer from "./admin/components/Users/UsersContainer";
import OrdersContainer from "./admin/components/Orders/OrdersContainer";
import ChangeCategoriesContainer from "./admin/components/ChangeCategory/ChangeCategoryContainer"
import ChangeProductContainer from "./admin/components/ChangeProduct/ChangeProductContainer";
import './App.css';

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
                            <Route exact path="/" render={() => <Redirect to={"/categories"}/>}/>
                            <Route path={'/users'} component={UsersContainer}/>
                            <Route path='/orders' component={OrdersContainer}/>
                            <Route path='/products' component={ProductsContainer}/>
                            <Route path="/category/edit/:CategoryID?" render={() => <ChangeCategoriesContainer/>}/>
                            <Route path="/product/edit/:ProductID?" render={() => <ChangeProductContainer/>}/>
                            <Route path='/categories' component={CategoriesContainer}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
