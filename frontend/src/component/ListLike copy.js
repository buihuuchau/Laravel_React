import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";

class ListLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: new Set(),
        };
    }
    componentWillMount() {
        this.checkedCheckbox = new Set(); // checkedkCheckbox(tuy y)
    }
    checkedIteml = (def) => {
        if (this.checkedCheckbox.has(def)) {
            this.checkedCheckbox.delete(def);
        } else {
            this.checkedCheckbox.add(def);
        }
        this.setState({
            like: this.checkedCheckbox,
        });
    };
    onChange = (event) => {
        // console.log(event.target.value);
        // var bien0 = event.target; // mac dinh
        // var bien1 = bien0.name; // target.name macdinh
        // var bien2 = bien0.value; // target.value macdinh
        // if (bien0.type == "checkbox") {
        //     var bien2 = bien0.checked;
        // } else {
        //     var bien2 = bien0.value;
        // }
        // this.setState({
        //     [bien1]: bien2,
        // });
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };
    onSubmit = async (event) => {
        event.preventDefault();
        var sothich = ""; // mang so thich
        for (const st of this.state.like) {
            sothich += st + " ";
        }
        var listsothich = "";
        // listsothich += "So thich: " + sothich; // sothich la mang ben tren
        listsothich += sothich;
        const formData = new FormData();
        formData.append("like", listsothich);
        let result = await fetch("http://127.0.0.1:8000/api/addlike", {
            method: "POST",
            body: formData,
        });
    };;
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
                            id="1"
                            name="like"
                            onChange={() => this.checkedIteml("dabanh")}
                            checked={this.state.like.has("dabanh")}
                        />
                        <label className="form-check-label" htmlFor="1">
                            da banh
                        </label>
                        <br />
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="2"
                            name="like"
                            onChange={() => this.checkedIteml("bongchuyen")}
                            checked={this.state.like.has("bongchuyen")}
                        />
                        <label className="form-check-label" htmlFor="2">
                            bong chuyen
                        </label>
                        <br />
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="3"
                            name="like"
                            onClick={this.onClick}
                            onChange={() => this.checkedIteml("dacau")}
                            checked={this.state.like.has("dacau")}
                        />
                        <label className="form-check-label" htmlFor="3">
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
