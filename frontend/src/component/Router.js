import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ListProduct from "./ListProduct";
import UpdateImageProduct from "./UpdateImageProduct";
import ListLike from "./ListLike";
import AddNguoiDung from "./AddNguoiDung";

class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
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
                        <Route path="/updateimageproduct/:idproduct">
                            <UpdateImageProduct />
                        </Route>
                        <Route
                            path="/listproduct"
                            component={ListProduct}
                        ></Route>
                        <Route path="/listlike" component={ListLike}></Route>
                        <Route
                            path="/addnguoidung"
                            component={AddNguoiDung}
                        ></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default Router;
