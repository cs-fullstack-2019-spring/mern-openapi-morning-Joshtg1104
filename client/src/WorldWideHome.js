import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import AmericasList from "./AmericasList";
import AfricaList from "./AfricaList";
import AsiaList from "./AsiaList";
import OceaniaList from "./OceaniaList";
import EuropeList from "./EuropeList";

class WorldWideHome extends Component {

    render() {

        return(
            <Router>
                <h1>Welcome to CodeSchool Earth</h1>
                {/*routes links to their destination components*/}
                <div className="linkSpacing">
                    <Link to="/">Home</Link> |
                    <Link to="/AmericasList">Americas</Link> |
                    <Link to="/AfricaList">Africa</Link> |
                    <Link to="/AsiaList">Asia</Link> |
                    <Link to="/OceaniaList">Oceania</Link> |
                    <Link to="/EuropeList">Europe</Link>
                    <Route path="/"/>
                    <Route path="/AmericasList" component={AmericasList}/>
                    <Route path="/AfricaList" component={AfricaList}/>
                    <Route path="/AsiaList" component={AsiaList}/>
                    <Route path="/OceaniaList" component={OceaniaList}/>
                    <Route path="/EuropeList" component={EuropeList}/>
                </div>
                <h1>Click One Region to See All the Countries Located In It</h1>
            </Router>
        );
    }
}

export default WorldWideHome;
