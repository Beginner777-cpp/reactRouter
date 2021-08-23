import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/productDetails" component={ProductDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
