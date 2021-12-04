import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function Register() {
    // Khi co user-info se chuyen toi
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/add");
        }
    }, []);
    // Khi co user-info se chuyen toi

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    async function SignUp() {
        let item = { name, email, password };
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        result = await result.json();
        // Khong nen dung localStorage
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add"); // chuyen toi sau khi nhan $result thanh cong
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Register Page</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={SignUp}
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;
