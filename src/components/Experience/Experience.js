import React  from 'react';
import './Experience.css';

/*
             <div className="image-container">
                <img className="image" src={require('../../ressources/images/works/' + props.element.name.toLowerCase() + '.jpg')} alt="" />
            </div>
 */

function Experience(props) {
    const style = {
        backgroundColor: props.bg,
        flexWrap: props.place === "left" ? 'wrap' : 'wrap-reverse'
    }
    return (
        <div className="experience-block" style={style}>

            {props.place === 'left' &&
             <div className="logo-container">
                    <img className="logo" src={require('../../ressources/images/icons/' + props.element.logo.toLowerCase() + '.png')} alt="." />
                </div>}
            <div className="text-container">
                <div className="title-and-date-container">
                    {props.element.title && <h2 className="internship-title"> {props.element.title}</h2>}
                    {props.element.date && <h2 className="internship-title"> {props.element.date}</h2>}
                </div>
                <div className="subject">
                    <p className="internship-subject" >{props.element.subject} </p>
                    <p className="internship-place">{props.element.place} </p>
                </div>
                {props.element.descriptionList ?
                    <ul>
                        {props.element.descriptionList.map((value) => {
                            return (
                                <li key={value} >
                                    {value}
                                </li>
                            )
                        })}
                    </ul>
                    : null}
                {props.element.description && <p> {props.element.description} </p>} 
            </div>
            
            
            {props.place === "right" &&
                <div className="logo-container">
                    <img className="logo" src={require('../../ressources/images/icons/' + props.element.logo.toLowerCase() + '.png')} alt="." />
                </div>}
        </div>
        )
}

export default Experience;