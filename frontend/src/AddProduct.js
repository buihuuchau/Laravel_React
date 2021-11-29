import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function AddProduct() {
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history.push("/register");
        }
    }, []);
    const history = useHistory();
    return (
        <div>
            <Header />
            <h1>Add Product</h1>
        </div>
    );
}

export default AddProduct;
