import React, { Component } from 'react';
import './Home.css';

class HomePage extends Component {

    render() {


        return (
            <div className="contentHome" >
                <div className="title" >
                    <span style={{ overflow: "hidden" } }><span className="title-hello">Hello ! </span> </span>
                    <span style={{ overflow: "hidden" }}><span className="title-welcome"> Welcome to my homepage </span> </span>
                </div>
            </div>
        );

    };
}

export default HomePage;