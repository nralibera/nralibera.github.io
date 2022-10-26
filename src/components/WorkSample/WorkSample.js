import React  from 'react';
import './WorkSample.css';



function WorkSample(props) {
    return (
        <div className="block">
            <div className="image-container">
                <img className="image" src={require('../../ressources/images/works/' + props.element.name.toLowerCase() + '.jpg')} alt="" />
            </div>
            <div>
                <h1> {props.element.title}</h1>
            </div>
            {
                props.element.descriptionList.map((value) => {
                    return (
                        <p>
                            {value}
                        </p>
                    )
                }

                )
            }    
            <div className="button" onClick={props.button}  > Next </div>
        </div>
        )
}

export default WorkSample;