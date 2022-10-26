import React, { Component } from 'react';
import react_logo from '../../ressources/images/icons/reactjs_logo.png'
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <div className="footer_app">

                <div className="menu">
                    Made with ReactJS
                    <img className="logo_react" src={react_logo} alt="react logo" />
                </div>

            </div>
        );
    }

}

export default Footer;
