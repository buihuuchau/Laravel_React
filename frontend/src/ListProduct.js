import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Table } from "react-bootstrap";
function ListProduct() {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/listProduct");
        result = await result.json();
        setData(result);
    }, []);
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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ListProduct;
