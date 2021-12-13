import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";

class ListLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: "",
        };
    }
    componentWillMount() {
        this.manglike = new Set(); // manglike(tuy y)
    }
    checkLike = (event) => {
        if (this.manglike.has(event)) {
            this.manglike.delete(event);
        } else {
            this.manglike.add(event);
        }
        this.setState({
            like: this.manglike,
        });
    };
    onSubmit = async (event) => {
        event.preventDefault();
        let sothich = ""; // mang so thich
        for (const st of this.state.like) {
            sothich += st + " ";
        }
        const formData = new FormData();
        formData.append("like", sothich);
        let result = await fetch("http://127.0.0.1:8000/api/addlike", {
            method: "POST",
            body: formData,
        });
    };
    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        return (
            <div>
                <h1>ListLike</h1>
                {/* <Form onSubmit={this.onSubmit}>
                    <Form.Select
                        aria-label="Default select example"
                        name="like"
                        onChange={this.onChange}
                        value={this.state.like}
                    >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Button variant="primary" type="submit">
                        Submit Like
                    </Button>
                </Form> */}
                <Form onSubmit={this.onSubmit}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="dabanh"
                            onClick={() => this.checkLike("dabanh")}
                        />
                        <label className="form-check-label" htmlFor="dabanh">
                            da banh
                        </label>
                        <br />
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="bongchuyen"
                            onClick={() => this.checkLike("bongchuyen")}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="bongchuyen"
                        >
                            bong chuyen
                        </label>
                        <br />
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="dacau"
                            onClick={() => this.checkLike("dacau")}
                        />
                        <label className="form-check-label" htmlFor="dacau">
                            da cau
                        </label>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit Like
                    </Button>
                </Form>
            </div>
        );
    }
}
export default ListLike;
