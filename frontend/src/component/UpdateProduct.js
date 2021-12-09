import React, { Component } from "react";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom"; // nhan params
import { Form, Button } from "react-bootstrap";
import Header from "./Header";

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            file_path: "",
            description: "",
            price: "",
        };
    }
    async componentDidMount() {
        let idproduct = this.props.location.state.id;
        // let idproduct = this.props.match.params.idproduct;
        const formData = new FormData();
        formData.append("idproduct", idproduct);
        let result = await fetch("http://127.0.0.1:8000/api/updateproduct", {
            method: "POST",
            body: formData,
        });
        result = await result.json();
        this.setState({
            name: result.name,
            file_path: result.file_path,
            description: result.description,
            price: result.price,
        });
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
        let idproduct = this.props.match.params.idproduct;
        const formData = new FormData();
        formData.append("idproduct", idproduct);
        formData.append("name", this.state.name);
        formData.append(
            "file",
            this.state.file_path,
            this.state.file_path.name
        );
        formData.append("description", this.state.description);
        formData.append("price", this.state.price);
        let result = await fetch("http://127.0.0.1:8000/api/doupdateproduct", {
            method: "POST",
            body: formData,
        });
        result = await result.json();
        this.setState({
            name: result.name,
            file_path: result.file_path,
            description: result.description,
            price: result.price,
        });
    };
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <Header />
                <h1>UpdateProduct</h1>
                <>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                            <img
                                style={{ width: 100 }}
                                src={
                                    "http://127.0.0.1:8000/" +
                                    this.state.file_path
                                }
                                // width="250px"
                                // height="100px"
                            />
                            <br />
                            <Form.Label>File</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={this.onChange2}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                            Update
                        </Button>
                    </Form>
                </>
            </div>
        );
    }
}
export default withRouter(UpdateProduct); // nhan params
