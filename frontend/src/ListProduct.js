import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Table } from "react-bootstrap";
function ListProduct() {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(async () => {
        // let result = await fetch("http://127.0.0.1:8000/api/listProduct");
        // result = await result.json();
        // setData(result);
        getData();
    }, []);
    async function deleteProduct(id) {
        const formData = new FormData();
        formData.append("id", id);
        let result = await fetch("http://127.0.0.1:8000/api/deleteProduct", {
            method: "POST",
            body: formData,
        });
        getData();
        // result = await result.json();
        // if (result == 0) {
        //     getData();
        // } else {
        //     getData();
        // }
    }
    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/listProduct");
        result = await result.json();
        setData(result);
    }
    return (
        <div>
            <Header />
            <h1>List Product</h1>
            <div className="col-sm-8 offset-sm-2">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>IMAGE</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>DO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                {/* <td>{index}</td> */}
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <img
                                    style={{ width: 100 }}
                                    src={
                                        "http://127.0.0.1:8000/" +
                                        item.file_path
                                    }
                                    // width="250px"
                                    // height="100px"
                                />
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        onClick={() => deleteProduct(item.id)}
                                    >
                                        Delete Product
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ListProduct;
