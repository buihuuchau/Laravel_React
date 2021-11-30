import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function ListProduct() {
    const history = useHistory();
    return (
        <div>
            <Header />
            <h1>List Product</h1>
        </div>
    );
}

export default ListProduct;
