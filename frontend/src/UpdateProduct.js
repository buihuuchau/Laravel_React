import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function UpdateProduct() {
    const history = useHistory();
    return (
        <div>
            <Header />
            <h1>Update Product</h1>
        </div>
    );
}

export default UpdateProduct;
