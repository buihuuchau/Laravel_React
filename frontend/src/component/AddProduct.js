import React, { Component } from "react";
import Header from "./Header";
import { Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            file_path: null,
            description: "",
            price: "",
        };
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };
    onChange2 = (event) => {
        this.setState({
            file_path: event.target.files[0],
        });
    };
    onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("file", this.state.file_path);
        formData.append("description", this.state.description);
        formData.append("price", this.state.price);
        let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
            method: "POST",
            body: formData,
        });
        // result = await result.json();
        // if (result === 1) {
        //     alert("them thanh cong");
        // } else {
        //     alert("loi");
        // }
    };
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <Header />
                <div className="col-sm-8 offset-2">
                    <h1>AddProduct</h1>
                    <>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={this.onChange2}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </>
                </div>
            </div>
        );
    }
}
export default AddProduct;
