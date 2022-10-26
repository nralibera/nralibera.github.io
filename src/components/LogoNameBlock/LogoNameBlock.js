import React, { Component } from 'react';
import './LogoNameBlock.css';


function LogoNameBlockElementary (props){
    return (
        <div className="tool-block">
            <img src={require('../../ressources/images/icons/' + props.name.toLowerCase() + '_logo.png')} alt="" />
            {props.name}
        </div>
    )
}

function LogoNameBlock(props) {
    return (
        <div className="tool-container">
            <div className="tool-title">
                <h2>{props.title}</h2></div>
            <div className="tool-logoname">
                {
                    props.nameList.map((value) => {
                        return (
                            <LogoNameBlockElementary key={value} name={value}/>
                            )
                    }

                    )
                    }
            </div>
        </div>
        )
}
export default LogoNameBlock;