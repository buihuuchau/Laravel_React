import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./Update";
import Protected from "./Protected";
import ListProduct from "./ListProduct";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/add">
                        <Protected Cmp={AddProduct} />
                        {/* <AddProduct /> */}
                    </Route>
                    <Route path="/update/:id">
                        <Protected Cmp={UpdateProduct} />
                        {/* <UpdateProduct /> */}
                    </Route>
                    <Route path="/">
                        <Protected Cmp={ListProduct} />
                        {/* <ListProduct /> */}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
