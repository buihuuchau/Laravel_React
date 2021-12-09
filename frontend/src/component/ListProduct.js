import React, { Component } from "react";
import Header from "./Header";
import { Redirect } from "react-router";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }
    async componentDidMount() {
        let result = await fetch("http://127.0.0.1:8000/api/listproduct");
        result = await result.json();
        this.setState({
            product: result,
        });
    }
    async reload() {
        let result = await fetch("http://127.0.0.1:8000/api/listproduct");
        result = await result.json();
        this.setState({
            product: result,
        });
    }
    deleteProduct = async (id) => {
        const formData = new FormData();
        formData.append("id", id);
        let result = await fetch("http://127.0.0.1:8000/api/deleteproduct", {
            method: "POST",
            body: formData,
        });
        this.reload();
    };
    onChange = (event) => {
        // var bien0 = event.target; // mac dinh
        // var bien1 = bien0.name; // target.name macdinh
        // var bien2 = bien0.value; // target.value macdinh
        // this.setState({
        //     [bien1]: bien2,
        // });
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <Header />
                <h1>ListProduct</h1>
                <Table>
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
                        {this.state.product.map((item) => {
                            return (
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
                                    />
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={() =>
                                                this.deleteProduct(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                        {/* gui kem /"+item.id, nhan bang
                                        this.props.match.params.idproduct */}
                                        {/* <Link
                                            type="submit"
                                            className="btn btn-secondary"
                                            to={"/updateproduct/" + item.id}
                                        >
                                            Update
                                        </Link> */}

                                        {/* khong /"+item.id van gui bth thong qua
                                        state, nhan bang
                                        this.props.location.state.id */}
                                        <Link
                                            type="submit"
                                            className="btn btn-secondary"
                                            to={{
                                                pathname:
                                                    "/updateproduct/" + item.id,
                                                state: {
                                                    id: item.id,
                                                    // name: item.name,
                                                    // price: item.price,
                                                },
                                            }}
                                        >
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default ListProduct;
