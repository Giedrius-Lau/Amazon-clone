import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage/HomePage";
import Checkout from "./pages/CheckoutPage/Checkout";
import "./style/App.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header></Header>
                        <Checkout></Checkout>
                    </Route>
                    <Route path="/login">
                        <h1>Login</h1>
                    </Route>
                    <Route path="/">
                        <Header></Header>

                        <Home></Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
