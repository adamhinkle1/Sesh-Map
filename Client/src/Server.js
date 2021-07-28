import React from "react";
import "./App.css";
import Header from "./Header";
import Board from "./Board";
import Home from "./HomeComponents/Home";
import About from "./About";
import Discover from "./Discover";
import Contact from "./Contact";
import Login from "./Context/Login";
import Logout from "./Context/Logout";
import Events from "./Events";
import Location from './MapComponents/location';
import "./About.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Server() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/board" exact>
          <Header />
          <Board />
        </Route>
        <Route path="/discover" exact>
          <Discover />
        </Route>
        <Route path="/discover/:id" component={Location} />
        <Route path="/about-us" exact>
          <Header />
          <main>
            <section className="container">
              <div className="title">
                <h2>Development Team</h2>
                <div className="underline"></div>
              </div>
              <About />
            </section>
          </main>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/contact-us" exact>
          <Header />
          <Contact />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default Server;
