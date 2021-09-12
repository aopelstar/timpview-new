import React,  { Component } from 'react';
import './contact.css';
import Banner from '../banner/Banner';
import pic from '../../images/hp.jpeg';
import axios from 'axios';
import Foot from '../foot/foot'

export default class Contact extends Component {

    constructor(){
        super();
        this.state={
            name: "",
            date: "",
            phone: "",
            email: "",
            time: "",
            details: "",
            emailValid: true
        }
    }

    handleChange(key, value){
      
        this.setState({
            [key]: value
        })
    }

    submit(){
        if(!this.state.email.includes('@')){
            this.setState({
                emailValid: false
            })
        }
        else{

            let body ={
                name: this.state.name,
                date: this.state.date,
                phone: this.state.phone,
                email: this.state.email,
                time: this.state.time,
                details: this.state.details
            }
            
            let promise = axios.post('/api/sendEmails', body)
            promise.then(()=> {window.location.assign('/#/thanks')})
        }
    }

    render(){
        return(
            <div className="contact-wrapper">
                <Banner />
                <div className="contact-banner">
                    Wanna' Chat?
                    <img src={pic} alt="dumb" className="photo" />
                    <div className="contact-desc">
                        Fill this out we'll get back to you within 48 hours.  
                    </div>
                </div>

                <div className="contact-form">
                    <div className="name-wrapper">
                        <div className="name">name:</div>
                        <div className="name-field"><input type = "text" onChange={(e)=> this.handleChange("name", e.target.value)}/></div>
                    </div>
                    <div className="date-wrapper">
                        <div className="date">date:</div>
                        <div className="date-field"><input type = "text" onChange={(e)=> this.handleChange("date", e.target.value)}/></div>
                    </div>
                    <div className="phone-wrapper">
                        <div className="phone">phone:</div>
                        <div className="phone-field"><input type = "text" onChange={(e)=> this.handleChange("phone", e.target.value)}/></div>
                    </div>
                    <div className="email-wrapper">
                        <div className="email">email:</div>
                        <div className="email-field"><input type = "text" onChange={(e)=> this.handleChange("email", e.target.value)} className={this.state.emailValid? "":"email-input"}/>
                        </div>
                    </div>
                    <div className="time-wrapper">
                        <div className="time">time:</div>
                        <div className="time-field"><input type = "text" onChange={(e)=> this.handleChange("time", e.target.value)}/></div>
                    </div>
                    <div className="details-wrapper">
                        <div className="details">anything else?</div>
                        <div className="details-field"><input type = "text" onChange={(e)=> this.handleChange("details", e.target.value)}/></div>
                    </div>
                </div>
                    <div className="call-to-action-send">
                <button  className="contact-button" onClick={() => this.submit()}>Send It</button>
                </div>
                <div className="call-to-action-contact">
                    Or you can just give us a call or text:
                <a href="tel:1-801-319-0708" className="contact-a"><button>call us: 801-319-0708</button></a>
                <a href="sms://+1-801-319-0708" className="contact-a"><button>text us: 801-319-0708</button></a>
                </div>
                <Foot />
            </div>
        )
    }
}