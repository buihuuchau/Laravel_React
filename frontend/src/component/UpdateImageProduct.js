import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // nhan params
import { Button, Form } from "react-bootstrap";

class UpdateImageProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageproduct: [],
            imageupload: null,
        };
    }
    async componentDidMount() {
        let idproduct = this.props.match.params.idproduct;
        const formData = new FormData();
        formData.append("idproduct", idproduct);
        let result = await fetch(
            "http://127.0.0.1:8000/api/updateimageproduct",
            {
                method: "POST",
                body: formData,
            }
        );
        result = await result.json();
        this.setState({
            imageproduct: result,
        });
    }
    deleteImageProduct = async (id) => {
        const formData = new FormData();
        formData.append("id", id);
        let result = await fetch(
            "http://127.0.0.1:8000/api/deleteimageproduct",
            {
                method: "POST",
                body: formData,
            }
        );
        this.reload();
    };
    reload = async () => {
        let idproduct = this.props.match.params.idproduct;
        const formData = new FormData();
        formData.append("idproduct", idproduct);
        let result = await fetch(
            "http://127.0.0.1:8000/api/updateimageproduct",
            {
                method: "POST",
                body: formData,
            }
        );
        result = await result.json();
        this.setState({
            imageproduct: result,
        });
    };
    onChange = (event) => {
        this.setState({
            imageupload: event.target.files,
        });
    };
    uploadImageProduct = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("idproduct", this.props.match.params.idproduct);
        if (this.state.imageupload != null) {
            for (let i = 0; i < this.state.imageupload.length; i++) {
                formData.append(`file[${i}]`, this.state.imageupload[i]);
            }
            let result = await fetch(
                "http://127.0.0.1:8000/api/uploadimageproduct",
                {
                    method: "POST",
                    body: formData,
                }
            );

            this.reload();
        }
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.uploadImageProduct}>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>
                            Upload Image for Product
                            {this.props.match.params.idproduct}
                        </Form.Label>
                        <Form.Control
                            multiple
                            type="file"
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-success">
                            Upload
                        </button>
                    </Form.Group>
                </Form>
                {this.state.imageproduct.map((row) => {
                    return (
                        <div>
                            <img
                                style={{ width: 100 }}
                                src={
                                    "http://127.0.0.1:8000/" +
                                    // this.state.file_path
                                    row.link // luu hinh anh de hien thi khi chon anh khac se khong bi mat
                                }
                                // width="250px"
                                // height="100px"
                            />
                            <p>{row.id}</p>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => this.deleteImageProduct(row.id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default withRouter(UpdateImageProduct); // nhan params
