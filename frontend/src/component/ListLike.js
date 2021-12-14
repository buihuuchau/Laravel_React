import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";

class ListLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: "",
            check: [],
            sex: "",
            feel: "0",
        };
    }
    componentWillMount() {
        this.manglike = new Set(); // manglike(tuy y)
    }
    async componentDidMount() {
        let result = await fetch("http://127.0.0.1:8000/api/listlike");
        result = await result.json();
        this.setState({
            check: result.like,
        });
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

    onChange2 = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };
    onSubmit2 = (event) => {
        event.preventDefault();
        alert(this.state.sex);
    };

    onChange3 = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };
    onSubmit3 = (event) => {
        event.preventDefault();
        alert(this.state.feel);
    };

    render() {
        if (!localStorage.getItem("user-info")) {
            return <Redirect to="/Login" />;
        }
        var hienthi = this.state.check.map((check, key) => {
            return (
                <input
                    className="form-check-input"
                    type="checkbox"
                    aria-label="dabanh"
                    value={check.name}
                    label={check.name}
                    onClick={() => this.checkLike(check.name)}
                />
            );
        });
        return (
            <div>
                <h1>ListLike</h1>
                {hienthi}
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

                <Form onSubmit={this.onSubmit2}>
                    <Form.Select
                        aria-label="Default select example"
                        name="sex"
                        onChange={this.onChange2}
                        value={this.state.sex}
                    >
                        <option>Gioi Tinh</option>
                        <option value="0">Nu</option>
                        <option value="1">Nam</option>
                    </Form.Select>
                    <Button variant="primary" type="submit">
                        Submit Like
                    </Button>
                </Form>

                <Form onSubmit={this.onSubmit3}>
                    <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        id="ok"
                        name="feel"
                        value={0}
                        onChange={this.onChange3}
                        checked={this.state.feel == 0}
                    />
                    <label for="ok">ok</label>
                    <br />
                    <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        id="happy"
                        name="feel"
                        value={1}
                        onChange={this.onChange3}
                        checked={this.state.feel == 1}
                    />
                    <label for="happy">happy</label>
                    <br />
                    <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        id="scare"
                        name="feel"
                        value={2}
                        onChange={this.onChange3}
                        checked={this.state.feel == 2}
                    />
                    <label for="scare">scare</label>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit Like
                    </Button>
                </Form>
            </div>
        );
    }
}
export default ListLike;
