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
                        <Route path="/Login">
                            <Login />
                        </Route>
                        <Route path="/Register">
                            <Register />
                        </Route>
                        <Route path="/AddProduct">
                            <AddProduct />
                        </Route>
                        <Route path="/UpdateProduct">
                            <UpdateProduct />
                        </Route>
                        <Route path="/ListProduct">
                            <ListProduct />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
