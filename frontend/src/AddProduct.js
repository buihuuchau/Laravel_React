import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function AddProduct() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    async function addProduct() {
        // cu phap gui post kem file
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        formData.append("description", description);
        formData.append("price", price);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: "POST",
            body: formData,
        });
        alert("Upload thanh cong");
        // result = await result.json();
        // console.warn("result", result);
        // // Khong nen dung localStorage
        // localStorage.setItem("product-info", JSON.stringify(result));
        // history.push("/add");

        // cu phap gui post ko kem file
        // let item = { name, file, description, price };
        // let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        // });
        // result = await result.json();
        // console.warn("result", result);
        // // Khong nen dung localStorage
        // localStorage.setItem("product-info", JSON.stringify(result));
        // history.push("/add");
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Product</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name Product</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name Product"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">File Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Enter File Name"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={addProduct}
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
