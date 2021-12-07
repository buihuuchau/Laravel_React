import React, { Component } from "react";
import Header from "./Header";
import { Redirect } from "react-router";

class ListProduct extends Component {
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <Header />
                <h1>ListProduct</h1>
            </div>
        );
    }
}
export default ListProduct;
