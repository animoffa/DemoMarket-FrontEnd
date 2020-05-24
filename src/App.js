import React from 'react';
import './App.css';
 import Header from'./Components/Header/header';
 import Sidebar from'./Components/Sidebar/sidebar';
import Categories from "./Components/CategoriesAdmin/Categories";
import ChangeCategory from "./Components/ChangeCategory/ChangeCategory";
import ChangeProduct from "./Components/ChangeProduct/ChangeProduct";
import LogoPic from "./Components/logoPic/logoPic"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Products from "./Components/Products/Products";
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
     <LogoPic/>
      <div className="body">
      <Sidebar />
          <div className="main__content">
              <Switch>
                  <Route path='/products' component={Products}/>
                  <Route path='/categories' component={Categories}/>
                  <Route path="/changecategory" render={() => <ChangeCategory CategoryName={"Механические"} CategoryDescription={"Удобны для игр и в повседневном применении"}/>}/>
                  <Route path="/" render={() => <ChangeProduct ProductName={"Клавиатура"}/>}/>
              </Switch>
          </div>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
