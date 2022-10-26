import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


class Header extends Component {

    render() {
        return (
            <div className="header_app">

                <div className="menu">
                    <Link to={"/Home"}> <div className="menu-title">Home</div> </Link>
                    <Link to={"/About"}> <div className="menu-title">About</div> </Link>
                    <Link to={"/Work"}> <div className="menu-title">Work Sample</div> </Link>
                    <Link to={"/Contact"}> <div className="menu-title">Contact</div> </Link>
                </div>

            </div>
        );
    }

}

export default Header;
