import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ListProduct from "./ListProduct";

class Router extends Component {
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
                        {/* url kem /idproduct */}
                        <Route path="/updateproduct/:idproduct">
                            <UpdateProduct />
                        </Route>
                        <Route
                            path="/listproduct"
                            component={ListProduct}
                        ></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default Router;
