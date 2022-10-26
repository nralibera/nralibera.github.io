import React, { Component } from 'react';
import WorkSample from '../WorkSample/WorkSample'
import FlipMove from 'react-flip-move';
import './Work.css';


class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayed: 0
        }
        this.photo1 = {
            "title": "Monkey, Bali 2021",
            "name": "monkey",
            "descriptionList": [
                "Description coming soon"
            ]
        }

        this.photo2 = {
            "title": "Cat, Jakarta 2021",
            "name": "cat",
            "descriptionList": [
                "Description coming soon"
            ]
        }
        this.photoList = [this.photo1, this.photo2];
        this.nextImage = this.nextImage.bind(this)
    }


    nextImage(e) {
        console.log(e)
        this.setState(function (state) {
            let listLength = this.photoList.length-1;
            let currentValue = this.state.displayed;
            console.log(currentValue < listLength)
            if (currentValue < listLength) {
                return {
                    displayed: currentValue + 1
                }
            } else {
                return {
                    displayed: 0
                }
            }
            
        })
    }

    render() {

        return (
            <div className="contentWork" >
                <FlipMove>
                    <div key={this.state.displayed}>
                        <WorkSample element={this.photoList[this.state.displayed]} button={this.nextImage} />
                    </div>
                </FlipMove>
            </div>
        );

    };
}

export default Work;