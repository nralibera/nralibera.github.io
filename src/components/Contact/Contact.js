import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: "",
            mail: "", 
            message:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        fetch("https://formsubmit.co/ajax/eaf5db59102674c0514c03d4857b531d", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mail: this.state.mail,
                message: this.state.message
            })
        })
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target,value,name)
        this.setState({
            [name]: value
        });
    }

    render() {


        return (
            <div className="contentContact" >
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="names-container">
                        <label>
                            First Name
                            <input className = "input-text" type="text" name="firstName" onChange={this.handleChange} />
                        </label> 
                        <label>
                            Last Name
                            <input className="input-text" type="text" name="lastName" onChange={this.handleChange} />
                        </label>   
                    </div>


                    <label>
                        Mail adress
                        <input className="input-mail" type="email" name="mail"  onChange={this.handleChange}  required  /> 
                    </label>
                    <label>
                        Your Message
                        <textarea className="input-message" type="text" name="message" onChange={this.handleChange} />
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        );

    };
}

export default Contact;