import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/Login";
import Register from "./component/Register";
import AddProduct from "./component/AddProduct";
import UpdateProduct from "./component/UpdateProduct";
import ListProduct from "./component/ListProduct";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/addproduct">
                            <AddProduct />
                        </Route>
                        <Route path="/updateproduct/:idproduct">
                            <UpdateProduct />
                        </Route>
                        <Route path="/listproduct">
                            <ListProduct />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
