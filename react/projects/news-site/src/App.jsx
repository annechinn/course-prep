
import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Section from "./components/Section"

const App = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/section/:topic/:articleId" component={Section} />
                    <Route path="/section/:topic" component={Section} />
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
            <Footer/>
        </>
    )
}

export default App;