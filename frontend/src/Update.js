import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Header from "./Header";
function UpdateProduct(props) {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    useEffect(async () => {
        getData();
    }, []);
    async function doupdateProduct() {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("file", file);
        formData.append("description", description);
        formData.append("price", price);
        let result = await fetch("http://127.0.0.1:8000/api/doupdateProduct", {
            method: "POST",
            body: formData,
        });
        getData();
    }
    async function getData() {
        const formData = new FormData();
        formData.append("id", props.match.params.id);
        let result = await fetch("http://127.0.0.1:8000/api/updateProduct", {
            method: "POST",
            body: formData,
        });
        result = await result.json();
        setData(result);
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Update Product</h1>
                <div className="form-group">
                    <label>ID Product</label>
                    <input
                        type="number"
                        className="form-control"
                        defaultValue={data.id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Name Product</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={data.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <img
                        style={{ width: 100 }}
                        src={"http://127.0.0.1:8000/" + data.file_path}
                        // width="250px"
                        // height="100px"
                    />
                    <br />
                    <label>File Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Enter File Name"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={data.description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        defaultValue={data.price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={doupdateProduct}
                >
                    Update Product
                </button>
            </div>
        </div>
    );
}

export default withRouter(UpdateProduct);
