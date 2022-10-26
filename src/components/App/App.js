import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';

const getIP = async () => {
    const res = await fetch('https://geolocation-db.com/json/')
    const data = await res.json();
    fetch("https://formsubmit.co/ajax/19fbff3a8dc9a4c32b53962370559202 ", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

class App extends Component {

    /*componentDidMount() {
        getIP()
    }
    */
    render() {


        return (
            <div className="app" >
                <div className="main">
                    <Route render={() => (<Header />)} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Work" component={Work} />
                        <Route exact path="/Contact" component={Contact} />
                        <Redirect from="*" to="/" />
                    </Switch>  
                    <Route render={() => (<Footer />)} />
                </div>
            </div>
        );
    }
} 

export default withRouter(App);
/* 

 */