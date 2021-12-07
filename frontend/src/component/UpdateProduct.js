import React, { Component } from "react";
import { Redirect } from "react-router";

class UpdateProduct extends Component {
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <h1>UpdateProduct</h1>
            </div>
        );
    }
}
export default UpdateProduct;
