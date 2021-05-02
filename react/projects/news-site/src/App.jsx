
import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TechSection from "./components/TechSection";
import ScienceSection from "./components/ScienceSection";

const App = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/tech" component={TechSection}/>
                    <Route path="/science" component={ScienceSection}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
            <Footer/>
        </>
    )
}

export default App;