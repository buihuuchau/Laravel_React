import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function Login() {
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/add");
        }
    }, []);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function Login() {
        // cu phap gui post ko kem file
        // let item = { email, password };
        // let result = await fetch("http://127.0.0.1:8000/api/login", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        // });

        // result = await result.json();
        // console.warn("result", result);
        // // Khong nen dung localStorage
        // localStorage.setItem("user-info", JSON.stringify(result));
        // history.push("/add");

        // cu phap gui post kem file
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            body: formData,
        });

        result = await result.json();
        if (result == 0) {
            console.warn("result", result);
            alert("Email or password is not matched");
        } else {
            console.warn("result", result);
            // Khong nen dung localStorage
            localStorage.setItem("user-info", JSON.stringify(result));
            history.push("/add");
        }
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Page</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={Login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
