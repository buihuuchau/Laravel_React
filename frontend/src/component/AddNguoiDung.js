import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBModalFooter,
} from "mdb-react-ui-kit";

class AddNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            check: 1,
            error: {},
        };
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
        // console.log(this.state);
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.validate();
    };
    validate() {
        var check = 1;
        var errors = {};
        if (this.state.name == "") {
            // alert("Please enter your name.");
            check = 0;
            errors["name"] = "Please enter your name.";
        }

        if (this.state.email == "") {
            // alert("Please enter your email Address.");
            check = 0;
            errors["emailnull"] = "Please enter your email Address.";
        }

        if (typeof this.state.email !== "undefined") {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );

            if (!pattern.test(this.state.email)) {
                // alert("Please enter valid email address.");
                check = 0;
                errors["email"] = "Please enter valid email address.";
            }
        }
        this.setState({
            check: 0,
            error: errors,
        });
    }
    render() {
        if (this.state.check == 0) {
            var name = this.state.error.name;
            var emailnull = this.state.error.emailnull;
            var email = this.state.error.email;
        }
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.onSubmit}>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    {name}
                                    <MDBInput
                                        label="Your email"
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {emailnull}
                                    {email}
                                    <MDBInput
                                        label="Your password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="Confirm your password"
                                        type="password"
                                        name="confirmpassword"
                                        value={this.state.confirmpassword}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary">Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default AddNguoiDung;
