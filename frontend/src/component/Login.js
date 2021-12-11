import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
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
    onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            body: formData,
        });

        result = await result.json();
        if (result === 0) {
            alert("Email or password is not matched");
        } else {
            localStorage.setItem("user-info", JSON.stringify(result));
            window.location.href = "/ListProduct";
        }
    };

    render() {
        if (localStorage.getItem("user-info")) {
            return <Redirect to="/ListProduct" />;
        }
        return (
            <div>
                <div className="col-sm-6 offset-3">
                    <h1>Login</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login;
